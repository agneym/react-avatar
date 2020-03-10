import React, { FC } from "react";

type IShape = "circle" | "square";

interface IProps {
  shape: IShape;
}

const Avatar: FC<IProps> = ({
  shape = "circle",
}) => {
  return (
    <p>Avatar</p>
  );
}

export default Avatar;