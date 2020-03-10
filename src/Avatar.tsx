import React, { createElement, FC, Fragment } from "react";
import { setPragma, styled } from "goober";
import useHasImageLoaded from './useHasImageLoaded';

setPragma(createElement);

const AvatarWrapper = styled<{ htmlWidth: string, htmlHeight: string, bgColor?: string, className: string }>("div")`
  border-radius: 50%;
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

type IShape = "circle" | "square";

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
  shape = "circle",
  text = "",
  htmlWidth = "100%",
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
        <AvatarWrapper
          htmlWidth={htmlWidth}
          htmlHeight={height}
          className={className}
        >
          <img
            src={src}
            alt={imgAlt}
            width={htmlWidth}
            height={height}
          />
        </AvatarWrapper>
      ) : (
        <p>Thing</p>
      )}
    </Fragment>
  );
}

export default Avatar;