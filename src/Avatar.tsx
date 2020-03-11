import React, { FC, Fragment, useRef, useEffect, useState } from 'react';
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

const Text = styled('p')<{ scale: number }>`
  margin: 0;
  vertical-align: middle;
  white-space: nowrap;
  transform: scale(${props => props.scale});
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
  bgColor?: string;
}> = ({ htmlWidth, htmlHeight, className, shape, text, bgColor }) => {

  const backgroundColor = (() => {
    if (bgColor) {
      return bgColor;
    }
    const index = sumOfCharacters(text) % defaultBackgrounds.length;
    return defaultBackgrounds[index];
  })();

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if(!container || !text) {
      return;
    }
    const containerWidth = container.offsetWidth;
    const textWidth = text.offsetWidth;
    if(containerWidth - 8 < textWidth) {
      setScale(((containerWidth - 8) / textWidth));
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
      ref={containerRef}
    >
      <Text ref={textRef} scale={scale}>{text}</Text>
    </AvatarWrapper>
  );
};

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
        <TextAvatar
          text={text}
          htmlWidth={htmlWidth}
          htmlHeight={height}
          className={className}
          shape={shape}
          bgColor={bgColor}
        />
      )}
    </Fragment>
  );
};

export default Avatar;
