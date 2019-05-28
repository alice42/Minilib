import React from 'react'
import ExternalLink from '../src/common/Links/ExternalLink'
import 'jest-styled-components'
import { renderCreateWithTheme } from './TestUtils'
import { theme } from '../src/Theme.js'
import { shallow } from 'enzyme'

const url = 'https://www.veepee.com/fr-fr/'

test('Basic link', () => {
  const component = renderCreateWithTheme(
    <ExternalLink
      href={url}
      label='Pretty basic button'
    />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-family', theme.fontPrimary.regular)
  expect(tree.props.href).toBe(url)
})

const redHover = {
  ':hover': {
    'color': 'red'
  }
}

test('Basic link with custom css (styled-component)', () => {
  const component = renderCreateWithTheme(
    <ExternalLink
      href={url}
      label='Pretty custom link'
      customStyle={redHover}
    />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-family', theme.fontPrimary.regular)
  expect(tree).toHaveStyleRule(redHover)
  expect(tree.props.href).toBe(url)
})

const buttonStyle = {
  'background-color': theme.primaryColor,
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'height': '40px',
  'width': '10%',
  'font-family': theme.fontPrimary.bold,
  'text-transform': 'uppercase',
  'color': 'white',
  'text-decoration': 'none',
  'border-radius': '10px',
  ':hover': {
    'color': theme.primaryColor,
    'background-color': 'white',
    'border': `solid 1px ${theme.primaryColor}`
  }
}

test('Link as button', () => {
  const component = renderCreateWithTheme(
    <ExternalLink
      href={url}
      label='Pretty custom button'
      customStyle={buttonStyle}
    />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-family', theme.fontPrimary.bold)
  expect(tree).toHaveStyleRule(buttonStyle)
  expect(tree.props.href).toBe(url)
})

test('Link with children', () => {
  const component = shallow(
    <ExternalLink href={url} customStyle={buttonStyle}>
      <div id='div'>Click Here</div>
    </ExternalLink>)

  expect(component).toMatchSnapshot()
  expect(component.find('#div').text()).toBe('Click Here')
  expect(component.props().href).toBe(url)
})
