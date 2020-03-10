import { useRef, useState, useEffect } from "react";

interface IArg {
  src: string;
  onLoad: (event: Event) => void;
  onError: (event: string | Event) => void;
}

/**
 * React custom hook to detect whether the image has loaded.
 * @param config The image attributes
 */
const useHasImageLoaded = ({ src, onLoad, onError }: IArg) => {
  // Detect component unmount.
  const isMounted = useRef(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }
    const image = new window.Image();
    image.src = src;

    image.onload = event => {
      if (isMounted.current) {
        setHasLoaded(true);
        if (onLoad) {
          onLoad(event);
        }
      }
    };

    image.onerror = event => {
      if (isMounted.current) {
        setHasLoaded(false);
        if (onError) {
          onError(event);
        }
      }
    };
  }, [src, onLoad, onError]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return hasLoaded;
};

export default useHasImageLoaded;