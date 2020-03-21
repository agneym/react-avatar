import React, { FC, Children, isValidElement, ReactChildren } from "react";

function cleanChildren(children: ReactChildren) {
  return Children.toArray(children).filter(child => isValidElement(child));
}

interface IProps {
  /** Maximum number of avatars to be shown */
  max?: number;
  /** Spacing between each avatar */
  spacing?: number;
  /** children Avatar components */
  children: ReactChildren;
}

const AvatarGroup: FC<IProps> = ({ max = 3, spacing = -3, children }) => {
  const validChildren = cleanChildren(children);
  const totalCount = validChildren.length;
  return null;
}

export default AvatarGroup;