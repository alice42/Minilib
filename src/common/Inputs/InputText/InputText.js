import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  LinedInput,
  LinedInputAnim,
  OutlinedInput,
  OutlinedInputAnim,
  InputTextSimple,
  Simple
} from './InputTextStyled'

const whitespaceValue = '\u00A0'

export default class InputText extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    inputType: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    inputStyle: PropTypes.string,
    withLabel: PropTypes.bool,
    withLabelTop: PropTypes.bool,
    customStyle: PropTypes.object,
    customStyleLabel: PropTypes.object,
    color: PropTypes.string,
    colorFocus: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundColorFocus: PropTypes.string,
    backgroundRadius: PropTypes.bool,
    fontStyle: PropTypes.string,
    fullWidth: PropTypes.bool
  }
  static defaultProps = {
    placeholder: null
  };
  state = { value: '' }
  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  inputLined = (placeholder) => {
    return (
      <label className='inputStyle'>
        <InputTextSimple {...this.props} placeholder={placeholder || whitespaceValue}
          value={this.state.value}
          onChange={this.handleChange} />
        <span className='label'>{this.props.label}</span>
        <span className='border' />
      </label>
    )
  }
  inputOutlined = (placeholder) => {
    return (
      <label className='inputStyle'>
        <fieldset>
          <legend><span>​{this.props.label}</span></legend>
        </fieldset>
        <InputTextSimple {...this.props} placeholder={placeholder || whitespaceValue}
          value={this.state.value}
          onChange={this.handleChange} />
        <span className='label'>{this.props.label}</span>
      </label>
    )
  }
  handleInputStyle = () => {
    switch (this.props.inputStyle) {
      case 'Lined':
        return (
          <LinedInput {...this.props}>
            {this.inputLined(this.props.placeholder)}
          </LinedInput>)
      case 'LinedAnim':
        return (
          <LinedInputAnim {...this.props}>
            {this.inputLined()}
          </LinedInputAnim>)
      case 'Outlined':
        return (
          <OutlinedInput {...this.props}>
            {this.inputOutlined(this.props.placeholder)}
          </OutlinedInput>)
      case 'OutlinedAnim':
        return (
          <OutlinedInputAnim {...this.props}>
            {this.inputOutlined()}
          </OutlinedInputAnim>)
      default:
        return (
          <Simple {...this.props}>
            {this.props.withLabel || this.props.withLabelTop
              ? <label>{this.props.label}</label> : null}
            <InputTextSimple className={'input'} aria-label={this.props.label} {...this.props}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Simple>)
    }
  }

  render () {
    return (this.handleInputStyle())
  }
}
