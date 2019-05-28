import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ExternalLinkStyled } from './ExternalLinkStyled'

export default class ExternalLink extends Component {
  static propTypes = {
    /** redirection URL */
    href: PropTypes.string,
    /** content text */
    label: PropTypes.string,
    /** override CSS */
    customStyle: PropTypes.object
  }

  static defaultProps = {
    href: null,
    label: null,
    customStyle: {}
  };

  render = () => <ExternalLinkStyled {...this.props}> {this.props.label || this.props.children} </ExternalLinkStyled>
}
