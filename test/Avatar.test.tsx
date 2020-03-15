import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import useHasImageLoaded from '../src/useHasImageLoaded';

import { Avatar } from '../src';

jest.mock('../src/useHasImageLoaded');

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar text="a" />);
  });

  it('should show text', () => {
    const text = 'AB';
    const { getByText } = render(<Avatar text={text} />);
    expect(getByText(text)).toBeDefined();
  });

  it('should show image with alt', () => {
    const img = {
      src: 'http://some-image.jpg',
      alt: 'some-image',
    };
    (useHasImageLoaded as jest.Mock).mockReturnValue(true);
    const { getByAltText } = render(
      <Avatar src={img.src} imageAlt={img.alt} />
    );
    expect(getByAltText(img.alt)).toBeDefined();
  });
});
