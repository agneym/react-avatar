import { renderHook } from '@testing-library/react-hooks';

import { useGravatar } from '../';
import { Rating } from '../src/useGravatar';

describe('useGravatar', () => {
  it('returns url', () => {
    const { result } = renderHook<string, string>(() => useGravatar(''));
    const url = 'http:' + result.current;
    expect(new URL(url).host).toContain('gravatar');
  });

  it('contains hash', () => {
    const { result } = renderHook<string, string>(() =>
      useGravatar('pErson@email.com')
    );
    const url = result.current;
    expect(url).toContain('78c8a3f73229a443be28f56546500b97');
  });

  it('has url parameters', () => {
    const config = {
      size: 10,
      forceDefault: true,
      rating: Rating.pg,
      defaultImage: 'identicon',
    };
    const { result } = renderHook<string, string>(() =>
      useGravatar('', config)
    );
    const url = 'http:' + result.current;
    expect(new URL(url).searchParams.get('s')).toBe(String(config.size));
    expect(new URL(url).searchParams.get('d')).toBe(config.defaultImage);
    expect(new URL(url).searchParams.get('f')).toBe('y');
    expect(new URL(url).searchParams.get('r')).toBe(config.rating);
  });
});
