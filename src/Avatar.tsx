import React, { createElement, FC } from "react";
import { setPragma, styled } from "goober";
import useHasImageLoaded from 'useHasImageLoaded';

setPragma(createElement);

const AvatarWrapper = styled("div")`
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

const Text = styled("p")`
  margin: 0;
  vertical-align: middle;
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

type IShape = "circle" | "square";

interface IProps {
  src: string;
  text: string;
  shape: IShape;
  htmlWidth: string;
  htmlString: string;
}

const Avatar: FC<IProps> = ({
  src,
  shape = "circle",
  text = "",
  htmlWidth = "100%",
  htmlHeight = "auto",
}) => {
  const hasLoaded = useHasImageLoaded({
    src,
  });
  return (
    <p>Avatar</p>
  );
}

export default Avatar;