import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconStyled } from './IconStyled'
import * as icons from '../statics/index'

export default class Icon extends Component {
  static propTypes = {
    /** Icon to display (KawaUI library) */
    name: PropTypes.string.isRequired,
    /** Color to apply on Icon */
    fillColor: PropTypes.string,
    /** Size of the component Icon (rem) */
    iconSize: PropTypes.string
  }
  static defaultProps = {
    name: 'butterfly',
    iconColor: '#464650',
    iconSize: '2rem'
  }
  render () {
    const SVG = icons[this.props.name]
    return (
      <IconStyled {...this.props}>
        <SVG
          name={this.props.name}
          width={this.props.iconSize}
          height={this.props.iconSize}
        />
      </IconStyled>
    )
  }
}
