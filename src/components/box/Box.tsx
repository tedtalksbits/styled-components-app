import { styled } from 'styled-components';

interface BoxProps {
  background?: string;
  color?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
  boxShadow?: string;
  border?: string;
  width?: string;
  height?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
  flex?: string;
  order?: string;
  flexGrow?: string;
  flexShrink?: string;
}
export const Box = styled.div.attrs((props: BoxProps) => ({
  background: props.background || 'white',
  color: props.color || 'black',
  padding: props.padding || '1rem',
  margin: props.margin || '1rem',
  borderRadius: props.borderRadius || '0.25rem',
  fontSize: props.fontSize || '1rem',
  fontWeight: props.fontWeight || '400',
  lineHeight: props.lineHeight || '1.5',
  textAlign: props.textAlign || 'left',
  boxShadow: props.boxShadow || 'none',
  border: props.border || 'none',
  width: props.width || 'auto',
  height: props.height || 'auto',
  display: props.display || 'block',
  justifyContent: props.justifyContent || 'flex-start',
  alignItems: props.alignItems || 'flex-start',
  flexDirection: props.flexDirection || 'row',
  flexWrap: props.flexWrap || 'nowrap',
  flex: props.flex || '0 1 auto',
  order: props.order || '0',
  flexGrow: props.flexGrow || '0',
  flexShrink: props.flexShrink || '1',
}))`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex: ${({ flex }) => flex};
  order: ${({ order }) => order};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
`;
