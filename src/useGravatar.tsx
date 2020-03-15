import { useMemo } from 'react';
import md5 from 'md5';

export enum Rating {
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

/**
 * Generate gravatar URLs
 * @param email Email address
 */
function useGravatar(
  email: string,
  { size, defaultImage, forceDefault, rating }: IConfig = {}
): string {
  const url = useMemo(() => {
    const processedEmail = email.trim().toLowerCase();

    const hash = md5(processedEmail);

    const params = new URLSearchParams();
    size && params.set('s', String(size));
    defaultImage && params.set('d', encodeURI(defaultImage));
    forceDefault && params.set('f', 'y');
    rating && params.set('r', rating);

    return `//www.gravatar.com/avatar/${hash}?${params.toString()}`;
  }, [email]);

  return url;
}

export default useGravatar;
