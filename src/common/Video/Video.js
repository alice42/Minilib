import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Overlay from '../Overlay/Overlay'
import VideoStyle from './VideoStyle'
import { conflictsValidator } from '../../utils'

class Video extends Component {
  static propTypes = {
    /** link to the image file ("./picture.jpg") */
    src: PropTypes.string.isRequired,
    /** link to the poster (image while loading) */
    poster: PropTypes.string,
    /** enabled controls */
    controls: PropTypes.bool,
    /** enabled autoPlay */
    autoplay: PropTypes.bool,
    /** mute video audio */
    muted: PropTypes.bool,
    /** enabled loop */
    loop: PropTypes.bool,
    /** round borders style on image (ex: true, "5px") */
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** video borders ("solid 5px #000000") */
    border: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** object-fit: cover (if :=false => 'none') */
    cover: conflictsValidator('boolean', ['contain', 'filled']),
    /** object-fit: contain */
    contain: conflictsValidator('boolean', ['cover', 'filled']),
    /** object-fit: fill */
    filled: conflictsValidator('boolean', ['contain', 'cover']),
    /** add a blur effect on the image ("10px", "1.2em", ...) */
    blur: PropTypes.string,
    /** height of the image ("200px", "30%", "45vh", ...) */
    height: PropTypes.string,
    /** width of the image ("200px", "30%", "45vw", ...) */
    width: PropTypes.string,
    /** pass props to the overlay, <Image>{ overlay content }</Image> */
    overlay: PropTypes.object,
    /** custom style object */
    customStyle: PropTypes.object
  }
  static defaultProps = {
    rounded: false,
    controls: true,
    autoplay: false,
    muted: false,
    loop: false,
    cover: false,
    contain: false,
    filled: false,
    border: false,
    blur: '0px',
    customStyle: {}
  }

  render () {
    const { src, title, overlay, controls, autoplay, muted, loop, poster } = this.props
    const alt = src.indexOf('/') !== -1 ? src.slice(src.lastIndexOf('/') + 1) : src
    return (
      <VideoStyle {...this.props}>
        <div>
          <video
            alt={alt}
            title={title || (alt.indexOf('.') !== -1 ? alt.slice(0, alt.lastIndexOf('.')) : alt)}
            controls={controls}
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            poster={poster}
          >
            HTML5 video unsupported by your browser
            <source src={src} type={'video/' + src.slice(src.lastIndexOf('.') + 1).toLowerCase()} />
          </video>
        </div>
        {
          this.props.children || (overlay && Object.keys(overlay).length) ? <Overlay {...overlay}>{ this.props.children }</Overlay> : null
        }
      </VideoStyle>
    )
  }
}

export default Video
