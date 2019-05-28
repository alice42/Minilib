import styled, { css } from 'styled-components'

export const ExternalLinkStyled = styled.a`
  font-family: ${props => props.theme.fontPrimary.regular};
  ${props =>
    css`
      ${props.customStyle}
    `}
`
