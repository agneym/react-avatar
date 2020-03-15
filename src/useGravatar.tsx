import { useMemo } from 'react';
import md5 from 'md5';

enum Rating {
  g = 'g',
  pg = 'pg',
  r = 'r',
  x = 'x',
}

interface IConfig {
  size?: number;
  defaultImage?:
    | string
    | '404'
    | 'mp'
    | 'identicon'
    | 'monsterid'
    | 'wavatar'
    | 'retro'
    | 'robohash'
    | 'blank';
  forceDefault?: boolean;
  rating?: Rating;
}

const defaultConfig = {
  size: 80,
  defaultImage: 'mp',
  forceDefault: false,
  rating: Rating.g,
};

/**
 * Generate gravatar URLs
 * @param email Email address
 */
function useGravatar(
  email: string,
  { size, defaultImage }: IConfig = defaultConfig
): string {
  const url = useMemo(() => {
    const hash = md5(email);
    return `//www.gravatar.com/avatar/${hash}`;
  }, [email]);

  return url;
}

export default useGravatar;
