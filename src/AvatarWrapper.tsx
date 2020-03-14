import styled from 'styled-components';
import readableColor from 'polished/lib/color/readableColor';

import { IShape } from './Avatar';

const AvatarWrapper = styled('div')<{
  htmlWidth: string;
  htmlHeight: string;
  bgColor: string;
  shape: IShape;
  textColor?: string;
}>`
  border-radius: ${props => (props.shape === 'square' ? 0 : '50%')};
  overflow: hidden;
  max-width: ${props => props.htmlWidth};
  min-width: ${props => props.htmlWidth};
  height: ${props => props.htmlHeight};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor || readableColor(props.bgColor)};
`;

export default AvatarWrapper;
