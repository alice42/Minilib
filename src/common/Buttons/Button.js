import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './ButtonStyled'
import Icon from '../Icons/Icon'

export default class Button extends Component {
  static propTypes = {
    /** Label of the button */
    label: PropTypes.string,
    /** Icon of the button */
    icon: PropTypes.string,
    /** Color of the icon */
    iconColor: PropTypes.string,
    /** Size of the icon */
    iconSize: PropTypes.string,
    /** Apply a radius on corners */
    rounded: PropTypes.bool,
    /** Fill background with selected color */
    fillBackground: PropTypes.bool,
    /** Your own css propreties */
    customStyle: PropTypes.object,
    /** Action triggered when button clicked */
    onClick: PropTypes.func,
    /** Action triggered when button hoverded: default log 'Hovered !' in console */
    onMouseOver: PropTypes.func
  }

  static defaultProps = {
    label: null,
    icon: null,
    iconColor: null,
    iconSize: '2rem',
    rounded: false,
    fillBackground: false,
    customStyle: null
  }

  handleIcon = () => {
    if (this.props.icon) {
      return <Icon name={this.props.icon} iconColor={this.props.iconColor} iconSize={this.props.iconSize} />
    }
  }

  render () {
    return <ButtonStyled {...this.props} aria-label={this.props.label || this.props.icon} >{this.props.label}
      {this.handleIcon()}
    </ButtonStyled>
  }
}
