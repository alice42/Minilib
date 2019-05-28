import styled, { css } from 'styled-components'

const customStyle = css`
    ${props => props.customStyle}
  `
export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: ${props => props.iconLeft ? 'row-reverse' : 'row'};
  justify-content: ${props => props.icon ? 'space-evenly' : 'center'};
  align-items: center;
  min-width: fit-content;
  min-height: fit-content;
  height: ${props => props.icon ? 'fit-content' : '2.5rem'} ;
  width: ${props => props.icon ? 'fit-content' : '10rem'} ;
  letter-spacing: 0.0625rem;
  text-align: center;
  text-transform: uppercase;
  text-indent:  ${props => props.icon && !props.iconLeft ? '0.625rem' : 'unset'};
  padding: 0;
  padding-right:  ${props => props.icon && props.iconLeft ? '0.625rem' : 'unset'};
  font-family: ${props => props.theme.fontPrimary.regular};
  font-size: ${props => props.theme.font12};
  background-color: ${props => props.fillBackground ? props.theme.primaryColorActive : 'transparent'};
  color: ${props => props.fillBackground ? props.theme.onPrimary : props.theme.primaryColorActive};
  border: ${props => (props.fillBackground ? 'none' : `0.125rem solid ${props.theme.primaryColorActive}`)};
  border-radius: ${props => (props.rounded ? '3.75rem' : 'unset')};
  :hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.onPrimary};
  }
  :focus {
    outline: none;
  }
  ${customStyle}
`
