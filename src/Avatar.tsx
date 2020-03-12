import React, { FC, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { readableColor } from 'polished';

import useHasImageLoaded from './useHasImageLoaded';

type IShape = 'circle' | 'square';

const AvatarWrapper = styled('div')<{
  htmlWidth: string;
  htmlHeight: string;
  bgColor: string;
  shape: IShape;
  textColor?: string;
}>`
  border-radius: ${props => (props.shape === 'square' ? 0 : '50%')};
  max-width: ${props => props.htmlWidth};
  min-width: ${props => props.htmlWidth};
  height: ${props => props.htmlHeight};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor || readableColor(props.bgColor)};
`;

const Text = styled('p')<{ scale: number }>`
  margin: 0;
  vertical-align: middle;
  font-weight: bold;
  white-space: nowrap;
  text-transform: uppercase;
  transform: scale(${props => props.scale});
`;

const Image = styled.img`
  object-fit: cover;
`;

const defaultBackgrounds = [
  '#3c40c6',
  '#ffa801',
  '#485460',
  '#0be881',
  '#f53b57',
];

/**
 * Get sum representing all characters in text.
 * @param text
 */
const sumOfCharacters = (text: string) => {
  let sum = 0;
  for (let i = 0; i < text.length; i += 1) {
    sum += text.charCodeAt(i);
  }
  return sum;
};

const TextAvatar: FC<{
  htmlWidth: string;
  htmlHeight: string;
  className: string;
  shape: IShape;
  text: string;
  backgrounds: string[];
  bgColor?: string;
  textColor?: string;
}> = ({
  htmlWidth,
  htmlHeight,
  className,
  shape,
  text,
  bgColor,
  textColor,
  backgrounds,
}) => {
  const backgroundColor = (() => {
    if (bgColor) {
      return bgColor;
    }
    const index = sumOfCharacters(text) % backgrounds.length;
    return backgrounds[index];
  })();

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) {
      return;
    }
    const containerWidth = container.offsetWidth;
    const textWidth = text.offsetWidth;
    if (containerWidth - 8 < textWidth) {
      setScale((containerWidth - 8) / textWidth);
    } else {
      setScale(1);
    }
  }, [text, htmlWidth, htmlHeight]);

  return (
    <AvatarWrapper
      htmlWidth={htmlWidth}
      htmlHeight={htmlHeight}
      className={className}
      shape={shape}
      bgColor={backgroundColor}
      textColor={textColor}
      ref={containerRef}
    >
      <Text ref={textRef} scale={scale}>
        {text}
      </Text>
    </AvatarWrapper>
  );
};

const ImageAvatar: FC<{
  htmlWidth: string;
  htmlHeight: string;
  className: string;
  shape: IShape;
  src: string;
  imageAlt: string;
}> = ({ htmlWidth, htmlHeight, className, shape, src, imageAlt }) => {
  return (
    <AvatarWrapper
      htmlWidth={htmlWidth}
      htmlHeight={htmlHeight}
      className={className}
      shape={shape}
      bgColor="transparent"
    >
      <Image src={src} alt={imageAlt} width={htmlWidth} height={htmlHeight} />
    </AvatarWrapper>
  );
};

interface IProps {
  /** Source of image to be displayed */
  src?: string;
  /** Text to be displayed as fallback */
  text?: string;
  /** shape of avatar. options: 'circle' | 'square' */
  shape?: IShape;
  /** width of image element and text fallback. defaults to 100% of width. */
  htmlWidth?: string;
  /** height of image element and text fallback. defaults to htmlWidth property specified. */
  htmlHeight?: string;
  /** background color for specific text fallback. */
  bgColor?: string;
  /** Alternate text for image. Defaults to '' - decorative image */
  imageAlt?: string;
  /** text color for fallback text. defaults to a readable dark or light color depending on background. */
  textColor?: string;
  /** classname to be passed into the top level component. */
  className?: string;
  /** array of background colors to pick from */
  backgrounds: string[];
}

/**
 * Render user avatars with text fallbacks.
 * @component
 */
const Avatar: FC<IProps> = ({
  src = '',
  imageAlt = '',
  shape = 'circle',
  text = '',
  htmlWidth = '100%',
  htmlHeight,
  bgColor,
  textColor,
  backgrounds = defaultBackgrounds,
  className = '',
}) => {
  const hasLoaded = useHasImageLoaded({
    src,
  });
  const height = htmlHeight || htmlWidth;
  return hasLoaded ? (
    <ImageAvatar
      src={src}
      imageAlt={imageAlt}
      htmlWidth={htmlWidth}
      htmlHeight={height}
      className={className}
      shape={shape}
    />
  ) : (
    <TextAvatar
      text={text}
      htmlWidth={htmlWidth}
      htmlHeight={height}
      className={className}
      shape={shape}
      bgColor={bgColor}
      textColor={textColor}
      backgrounds={backgrounds}
    />
  );
};

export default Avatar;
