import React, { FC, Fragment } from 'react';
import styled from 'styled-components';

import useHasImageLoaded from './useHasImageLoaded';

type IShape = 'circle' | 'square';

const AvatarWrapper = styled('div')<{
  htmlWidth: string;
  htmlHeight: string;
  bgColor?: string;
  shape: IShape;
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
  color: #ffffff;
`;

// const Text = styled("p")`
//   margin: 0;
//   vertical-align: middle;
// `;

// /**
//  * Get sum representing all characters in text.
//  * @param text
//  */
// const sumOfCharacters = (text: string) => {
//   let sum = 0;
//   for (let i = 0; i < text.length; i += 1) {
//     sum += text.charCodeAt(i);
//   }
//   return sum;
// };

interface IProps {
  src?: string;
  text?: string;
  shape?: IShape;
  htmlWidth: string;
  htmlHeight?: string;
  bgColor?: string;
  imgAlt?: string;
  className?: string;
}

const TextAvatar = () => {};

const ImageAvatar: FC<{
  htmlWidth: string;
  htmlHeight: string;
  className: string;
  shape: IShape;
  imgAlt: string;
  src: string;
}> = ({ htmlWidth, htmlHeight, className, shape, imgAlt, src }) => {
  return (
    <AvatarWrapper
      htmlWidth={htmlWidth}
      htmlHeight={htmlHeight}
      className={className}
      shape={shape}
    >
      <img src={src} alt={imgAlt} width={htmlWidth} height={htmlHeight} />
    </AvatarWrapper>
  );
};

const Avatar: FC<IProps> = ({
  src = '',
  shape = 'circle',
  text = '',
  htmlWidth = '100%',
  htmlHeight,
  bgColor,
  imgAlt = '',
  className = '',
}) => {
  const hasLoaded = useHasImageLoaded({
    src,
  });
  const height = htmlHeight || htmlWidth;
  return (
    <Fragment>
      {hasLoaded ? (
        <ImageAvatar
          src={src}
          imgAlt={imgAlt}
          htmlWidth={htmlWidth}
          htmlHeight={height}
          className={className}
          shape={shape}
        />
      ) : (
        <p>Thing</p>
      )}
    </Fragment>
  );
};

export default Avatar;
