import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import ExternalLink from '../src/common/Links/ExternalLink'
import { theme } from '../src/Theme'

const redHover = {
  ':hover': {
    'color': 'red'
  }
}

const buttonStyle = {
  'background-color': theme.primaryColor,
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'text-align': 'center',
  'height': '40px',
  'width': '15%',
  'font-family': theme.fontSecondary.regular,
  'text-transform': 'uppercase',
  'color': 'white',
  'text-decoration': 'none',
  'border-radius': '10px',
  'border': `solid 1px ${theme.primaryColor}`,
  ':hover': {
    'color': theme.primaryColor,
    'background-color': 'white'
  }
}

storiesOf('Links/External Link', module)
  .add('Basic',
    () => <ExternalLink label={text('label', 'Click here')} href={text('url', 'https://www.veepee.com/fr-fr/')} />,
    { info: 'Basic link with href props' })

  .add('With custom hover',
    () => <ExternalLink label={text('label', 'Click here')} href={text('url', 'https://www.veepee.com/fr-fr/')} customStyle={redHover} />,
    { info: 'Basic link with href and style props' })

  .add('As button',
    () => <ExternalLink label={text('label', 'Click here')} href={text('url', 'https://www.veepee.com/fr-fr/')} customStyle={buttonStyle} />,
    { info: 'Button component wrapped in Link component' })
