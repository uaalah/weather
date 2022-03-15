import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  position,
  PositionProps,
  compose,
} from 'styled-system';

type GenericProps = FlexboxProps & LayoutProps & ColorProps & TypographyProps & SpaceProps & BorderProps & ShadowProps & PositionProps;

export const Box = styled.div<GenericProps>`
  ${compose(
    layout,
    flexbox,
    space,
    color,
    typography,
    border,
    shadow,
    position
  )}
`;

type TextProps = SpaceProps & ColorProps & TypographyProps & LayoutProps & PositionProps;
export const Text = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  ${compose(
    space,
    color,
    typography,
    layout,
    position,
  )}
`;