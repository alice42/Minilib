import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OverlayStyle from './OverlayStyle'
import { conflictsValidator } from '../../utils'

class Overlay extends Component {
  static propTypes = {
    /** set dark background and light text color */
    dark: conflictsValidator('boolean', ['light']),
    /** set light background and dark text color */
    light: conflictsValidator('boolean', ['dark']),
    /** round borders style on overlay (ex: true, "10px") */
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** text color */
    color: PropTypes.string,
    /** background color (need an opacity (:dark, :light or :opacity)) */
    backgroundColor: PropTypes.string,
    /** opacity of the overlay (ex: "0.8") */
    opacity: PropTypes.number,
    /** overlay takes all the space it can, or takes the minimum it needs */
    fullsize: PropTypes.bool,
    /** overlay displayed on top, mixable with others positions (ex: true, "20px") */
    /** modifying margin if fullsize disabled and padding when enabled */
    top: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** overlay displayed on bottom, see :top */
    bottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** overlay displayed on left, see :top */
    left: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** overlay displayed on right, see :top */
    right: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** padding inside the overlay (ex: "15px") */
    padding: PropTypes.string,
    /** margin around, directions (top, left, ...) takes the priority on it */
    margin: PropTypes.string,
    /** custom style object */
    customStyle: PropTypes.object
  }
  static defaultProps = {
    dark: false,
    light: false,
    rounded: false,
    fullsize: true,
    top: false,
    bottom: false,
    left: false,
    right: false,
    padding: '10px',
    margin: '0px',
    customStyle: {}
  }

  render () {
    return (
      <OverlayStyle {...this.props}>
        {this.props.children}
      </OverlayStyle>
    )
  }
}

export default Overlay
