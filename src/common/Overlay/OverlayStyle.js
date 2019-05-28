import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

const OverlayStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-self: center;
  ${({ rounded, theme }) => rounded && css`
    border-radius: ${typeof rounded === 'string' ? rounded : theme.borderRadius};
  `}
  padding: ${({ padding }) => padding};
  /* color switching with dark light ou color props */
  color: ${({ dark, light, color, backgroundColor, theme }) => dark ? (backgroundColor || theme.backgroundColor) : light ? (color || theme.onBackground) : color || theme.onSurface};
  /* Background color default transparent. Using transparentize (1 - opacity) to apply to any type of color (ex: rgb(), rgba(), #000000, #000, blue, ...) */
  background-color: ${({ dark, light, backgroundColor, color, opacity, theme }) => transparentize(
    1.0 - (opacity !== undefined ? parseFloat(opacity) : parseFloat(theme.overlayOpacity)),
    dark ? (color || theme.onBackground) : light ? (backgroundColor || theme.backgroundColor) : backgroundColor || 'transparent'
  )};
  /* justify and align flex if fullsize is on */
  justify-content: ${({ fullsize, top, bottom }) => fullsize ? (top && !bottom ? 'flex-start' : (bottom && !top ? 'flex-end' : 'center')) : 'center'};
  align-items: ${({ fullsize, left, right }) => fullsize ? (left && !right ? 'flex-start' : (right && !left ? 'flex-end' : 'center')) : 'center'};

  top: ${({ top, fullsize, margin }) => fullsize ? margin : top ? (typeof top === 'boolean' ? margin : top) : 'auto'};
  bottom: ${({ bottom, fullsize, margin }) => fullsize ? margin : bottom ? (typeof bottom === 'boolean' ? margin : bottom) : 'auto'};
  left: ${({ left, fullsize, margin }) => fullsize ? margin : left ? (typeof left === 'boolean' ? margin : left) : 'auto'};
  right: ${({ right, fullsize, margin }) => fullsize ? margin : right ? (typeof right === 'boolean' ? margin : right) : 'auto'};

  /* if fullsize, we need to handle top, bottom, etc... props differently to configure padding instead of margin */ 
  ${({ fullsize, top, bottom, left, right }) => fullsize && css`
    ${top && (typeof top === 'string') && css`padding-top: ${top};`}
    ${bottom && (typeof bottom === 'string') && css`padding-bottom: ${bottom};`}
    ${left && (typeof left === 'string') && css`padding-left: ${left};`}
    ${right && (typeof right === 'string') && css`padding-right: ${right};`}
  `}
  ${({ customStyle }) => css(customStyle)}
`

export default OverlayStyle
