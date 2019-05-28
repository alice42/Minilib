import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Overlay from '../Overlay/Overlay'
import ImageStyle from './ImageStyle'
import { conflictsValidator } from '../../utils'

class Image extends Component {
  static propTypes = {
    /** link to the image file ("./picture.jpg") */
    src: PropTypes.string.isRequired,
    /** round borders style on image (ex: true, "5px") */
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** object-fit: cover (if :=false => 'none') */
    cover: conflictsValidator('boolean', ['contain', 'filled']),
    /** object-fit: contain */
    contain: conflictsValidator('boolean', ['cover', 'filled']),
    /** object-fit: fill */
    filled: conflictsValidator('boolean', ['contain', 'cover']),
    /** image borders ("solid 5px #000000") */
    border: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** add a blur effect on the image ("10px", "1.2em", ...) */
    blur: PropTypes.string,
    /** height of the image ("200px", "30%", "45vh", ...) */
    height: PropTypes.string,
    /** width of the image ("200px", "30%", "45vw", ...) */
    width: PropTypes.string,
    /** set the image to a background-image */
    asBackground: PropTypes.bool,
    /** asBackground and background-repeat to the image (true, "20px 15vh", ...) */
    mosaic: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** pass props to the overlay, <Image>{ overlay content }</Image> */
    overlay: PropTypes.object,
    /** custom style object */
    customStyle: PropTypes.object
  }
  static defaultProps = {
    rounded: false,
    cover: false,
    contain: false,
    filled: false,
    asBackground: false,
    border: false,
    mosaic: false,
    blur: '0px',
    overlay: {},
    customStyle: {}
  }

  render () {
    const { src, title, asBackground, mosaic, overlay } = this.props
    const alt = src.indexOf('/') !== -1 ? src.slice(src.lastIndexOf('/') + 1) : src
    return (
      <ImageStyle {...this.props}>
        {
          asBackground || mosaic ? <div />
            : <img
              src={src}
              alt={alt}
              title={title || (alt.indexOf('.') !== -1 ? alt.slice(0, alt.lastIndexOf('.')) : alt)}
            />
        }
        {
          this.props.children || (overlay && Object.keys(overlay).length) ? <Overlay {...overlay}>{ this.props.children }</Overlay> : null
        }
      </ImageStyle>
    )
  }
}

export default Image
