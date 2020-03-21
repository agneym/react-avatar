import React, {
  FC,
  Children,
  isValidElement,
  useMemo,
  useContext,
} from 'react';
import Avatar, { AvatarContext, AvatarProps } from './Avatar';
import styled from 'styled-components';

function cleanChildren(children: JSX.Element[]) {
  return Children.toArray(children).filter(child => isValidElement(child));
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const AvatarWrapper = styled.div<{
  marginLeft: number;
  zIndex: number;
  max: number;
}>`
  margin-left: ${props => props.marginLeft}px;
  z-index: ${props => props.zIndex};

  &:hover {
    z-index: ${props => props.max};
  }
`;

interface AvatarGroupProps extends Partial<AvatarProps> {
  /** Maximum number of avatars to be shown */
  max?: number;
  /** Spacing between each avatar */
  spacing?: number;
  /** children Avatar components */
  children: JSX.Element[];
}

const AvatarGroup: FC<AvatarGroupProps> = ({
  max = 3,
  spacing = -30,
  children,
  ...rest
}) => {
  const validChildren = cleanChildren(children);
  const totalCount = validChildren.length;

  const avatarContext = useContext(AvatarContext);

  const value = useMemo(
    () => ({
      ...avatarContext,
      ...rest,
    }),
    []
  );

  return (
    <AvatarContext.Provider value={value}>
      <Flex>
        {validChildren.map((child, index) => {
          if (index > max) {
            return null;
          }
          if (index === max) {
            return (
              <AvatarWrapper marginLeft={spacing} zIndex={index} max={max}>
                <Avatar text={`+${totalCount - max}`} />
              </AvatarWrapper>
            );
          }
          const first = index === 0;
          return (
            <AvatarWrapper
              marginLeft={first ? 0 : spacing}
              zIndex={index}
              max={max}
            >
              {child}
            </AvatarWrapper>
          );
        })}
      </Flex>
    </AvatarContext.Provider>
  );
};

export default AvatarGroup;
