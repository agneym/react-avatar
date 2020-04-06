import React, { FC, useRef, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import AvatarWrapper from './AvatarWrapper';
import { IShape } from './Avatar';

const Text = styled('p')<{ scale: number }>`
  margin: 0;
  vertical-align: middle;
  font-weight: bold;
  white-space: nowrap;
  text-transform: uppercase;
  transform: scale(${props => props.scale});
`;

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
  imageAlt: string;
  textProcessor: (text: string) => string;
}> = ({
  htmlWidth,
  htmlHeight,
  className,
  shape,
  text,
  bgColor,
  textColor,
  backgrounds,
  textProcessor,
  imageAlt,
}) => {
  const { backgroundColor, processedText } = useMemo(() => {
    const processedText = textProcessor(text);
    if (bgColor) {
      return {
        backgroundColor: bgColor,
        processedText,
      };
    }
    const index = sumOfCharacters(text) % backgrounds.length;
    return {
      backgroundColor: backgrounds[index],
      processedText,
    };
  }, [text, bgColor, backgrounds]);

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
      role="img"
      aria-label={imageAlt}
    >
      <Text ref={textRef} scale={scale}>
        {processedText}
      </Text>
    </AvatarWrapper>
  );
};

export default TextAvatar;
