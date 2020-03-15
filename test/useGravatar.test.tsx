import { renderHook } from '@testing-library/react-hooks';

import { useGravatar } from '../';

describe('useGravatar', () => {
  it('returns url', () => {
    const { result } = renderHook<string, string>(() => useGravatar(''));
    const url = 'http:' + result.current;
    expect(new URL(url).host).toContain('gravatar');
  });
});
