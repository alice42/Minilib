import styled, { css } from 'styled-components'

const customStyle = css`
    ${props => props.customStyle}
  `
const customStyleLabel = css`
    ${props => props.customStyleLabel}
  `
export const InputTextSimple = styled.input.attrs(props => ({
  type: /^(password|url|number|email|text)$/.test(props.inputType) ? props.inputType : 'text',
  autoComplete: 'off',
  ariaLabel: props.label
}))`
font-family: ${props => props.theme.fontPrimary.regular};
textOverflow: 'ellipsis';
:focus  {
  outline: 0;
}
`
export const Simple = styled.div`
  display: flex;
  flex-direction: ${props => props.withLabelTop ? 'column' : 'row'};
  label {
    ${customStyleLabel}
  }
  .input {
    width:  ${props => props.fullWidth ? '-webkit-fill-available' : 'fit-content'}
    ${customStyle}
  }
`
const InputComponent = styled.div`
font-family: ${props => props.theme.fontPrimary.regular};
`
export const LinedInput = styled(InputComponent)`
margin: 0.625rem;
.inputStyle {
  position: relative;
  display: flex;
}
label {
  background: ${props => props.backgroundColor || 'none'};
  width:  ${props => props.fullWidth ? '-webkit-fill-available' : 'fit-content'};
  border-top-right-radius: ${props => props.backgroundRadius ? '0.3125rem' : 'none'};
  border-top-left-radius: ${props => props.backgroundRadius ? '0.3125rem' : 'none'};
}
.inputStyle .label {
  color: ${props => props.color};
  position: absolute;
  left: 0;
  transform: scale(0.75);
}
fieldset {
  top: -0.3125rem;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  position: absolute;
  pointer-events: none;
  border: 0.125rem solid ${props => props.color};
  border-radius: 0.625rem;
}
.inputStyle .border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.125rem;
  width: 100%;
  background: ${props => props.colorFocus || props.theme.primaryColor};
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
}
.inputStyle ${InputTextSimple} {
  width:  ${props => props.fullWidth ? '-webkit-fill-available' : 'fit-content'}
  border: 0;  
  padding-top: 1.5625rem
  padding-bottom: 0.3125rem;
  padding-left: 0.3125rem;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 0.125rem solid ${props => props.color};
  background: none;
  border-radius: 0;
  transition: all 0.15s ease;
}
.inputStyle ${InputTextSimple}:focus {
  background: none;
}
label:focus-within {
  background: ${props => props.backgroundColorFocus};
  border-top-right-radius: ${props => props.backgroundRadius ? '0.3125rem' : 'none'};
  border-top-left-radius: ${props => props.backgroundRadius ? '0.3125rem' : 'none'};
}
.inputStyle ${InputTextSimple}:focus + span {
  color: ${props => props.colorFocus || props.theme.primaryColor};
}
.inputStyle ${InputTextSimple}:focus + span + .border {
  transform: scaleX(1);
}
`

export const LinedInputAnim = styled(LinedInput)`
.inputStyle .label {
  color: ${props => props.color};
  position: absolute;
  margin-left: 0.25rem;
  padding-top: 0.5625rem;
  top: 1rem;
  transform : scale(1);
  transform-origin: 0 0;
  transition: all 0.2s ease;
}
.inputStyle ${InputTextSimple}:not(:placeholder-shown) + span {
  transform: translateY(-1.25rem) scale(0.75);
}
.inputStyle ${InputTextSimple}:focus + span {
  transform: translateY(-1.25rem) scale(0.75);
}
`
export const OutlinedInput = styled(LinedInput)`
label{
  background: none
  width:  ${props => props.fullWidth ? '-webkit-fill-available' : 'fit-content'}
}
.inputStyle .label {
  color: transparent;
  margin-left: 0.25rem;
  top: 1rem;
  left: 1rem;
  transform : scale(1);
  transform-origin: 0 0;
  transition: all 0.2s ease;
}
legend {
  color: ${props => props.color};
  line-height: 0.6875rem;
  -webkit-transform: scale(0.75);
}
.inputStyle ${InputTextSimple}  {
  padding: 1rem;
  border-bottom: 0;
}
.inputStyle ${InputTextSimple}:focus + span {
  color: transparent;
}
.inputStyle:focus-within {
  legend {
    color : ${props => props.colorFocus || props.theme.primaryColor}
  }
  fieldset{
    border-color : ${props => props.colorFocus || props.theme.primaryColor}
  }
}
`

export const OutlinedInputAnim = styled(LinedInput)`
label{
  background: none;
}
.inputStyle .label {
  color: ${props => props.color};
  margin-left: 0.25rem;
  top: 1rem;
  left: 1rem;
  transform : scale(1);
  transform-origin: 0 0;
  transition: all 0.2s ease;
}
legend {
  color: transparent;
  padding: 0;
  text-align: left;
  line-height: 0.6875rem;
  transform : scale(0.75);
  transform-origin: 0 0;
}
.inputStyle ${InputTextSimple}  {
  border-top: solid 0.125rem ${props => props.color};
  border-radius: 0.625rem;
  border-bottom: 0;
  padding: 0.9375rem;
}
.inputStyle ${InputTextSimple}:not(:placeholder-shown) + span {
  border-top: 0.125rem solid transparent;
  transform: translate(-0.125rem, -1.375rem) scale(0.75);
}
.inputStyle ${InputTextSimple}:focus + span {
  border-top: 0.125rem solid transparent;
  transform: translate(-0.125rem, -1.375rem) scale(0.75);
}
.inputStyle:focus-within {
  fieldset{
    border-color :  ${props => props.colorFocus || props.theme.primaryColor}
  }
}
.inputStyle ${InputTextSimple}:focus {
  border-top: 0.125rem solid transparent;
  padding: 0.9375rem;
}
.inputStyle ${InputTextSimple}:not(:placeholder-shown) {
  border-top: 0.125rem solid transparent;
}
`
