import React, { FC, createContext, useContext } from 'react';
import styled from 'styled-components';

import AvatarWrapper from './AvatarWrapper';
import TextAvatar from './TextAvatar';
import useHasImageLoaded from './useHasImageLoaded';

export type IShape = 'circle' | 'square';

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
  backgrounds?: string[];
}

const defaultProps = {
  src: '',
  imageAlt: '',
  shape: 'circle' as IShape,
  text: '',
  htmlWidth: '100%',
  backgrounds: defaultBackgrounds,
  className: '',
};

export const AvatarContext = createContext<Partial<IProps>>(defaultProps);

/**
 * Render user avatars with text fallbacks.
 * @component
 */
const Avatar: FC<IProps> = props => {
  const avatarContext = useContext(AvatarContext);
  const normalizedProps = {
    ...defaultProps,
    ...avatarContext,
    ...props,
  };

  const {
    src,
    imageAlt,
    shape,
    text,
    htmlWidth,
    htmlHeight,
    backgrounds,
    textColor,
    bgColor,
    className,
  } = normalizedProps;

  const hasLoaded = useHasImageLoaded({
    src,
  });
  const height = htmlHeight || htmlWidth;

  if (__DEV__) {
    if (!src && !text) {
      console.warn('text and src are not provided.');
    }
  }

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
