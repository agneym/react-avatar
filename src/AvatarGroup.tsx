import React, { FC, Children, isValidElement, cloneElement } from 'react';
import styled from 'styled-components';

function cleanChildren(children: Element[]) {
  return Children.toArray(children).filter(child => isValidElement(child));
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const AvatarWrapper = styled.div<{ marginLeft: number, zIndex: number }>`
  margin-left: ${props => props.marginLeft}px;
  z-index: ${props => props.zIndex};
`;

interface IProps {
  /** Maximum number of avatars to be shown */
  max?: number;
  /** Spacing between each avatar */
  spacing?: number;
  /** children Avatar components */
  children: Element[];
}

const AvatarGroup: FC<IProps> = ({ max = 3, spacing = -30, children }) => {
  const validChildren = cleanChildren(children);

  return (
    <Flex>
      {validChildren.map((child, index) => {
    if(index > max) {
      return null;
    }
    if(index === max) {
      return <p>+ More</p>
    }
    const first = index === 0;
    return (
      <AvatarWrapper marginLeft={first ? 0 : spacing} zIndex={index}>
        {child}
      </AvatarWrapper>
    );
  })}
    </Flex>
  );
};

export default AvatarGroup;
