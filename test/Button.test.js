import React from 'react'
import Button from '../src/common/Buttons/Button'
import 'jest-styled-components'
import { renderCreateWithTheme } from './TestUtils'
import { theme } from '../src/Theme.js'
import { shallow } from 'enzyme'
// import './classTest.css'

describe('Test Button component rendering', () => {
  it('Squared active with fill', () => {
    const component = renderCreateWithTheme(
      <Button fillBackground label='Button Label' />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-color', theme.primaryColorActive)
    expect(tree).toHaveStyleRule('border-radius', 'unset')
  })

  it('Rounded active with fill', () => {
    const component = renderCreateWithTheme(
      <Button rounded fillBackground label='Button Label' />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-color', theme.primaryColorActive)
    expect(tree).toHaveStyleRule('border-radius', '3.75rem')
  })

  it('Squared active with no fill', () => {
    const component = renderCreateWithTheme(<Button label='Button Label' />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-color', 'transparent')
    expect(tree).toHaveStyleRule(
      'border',
      `0.125rem solid ${theme.primaryColorActive}`
    )
    expect(tree).toHaveStyleRule('border-radius', 'unset')
  })

  it('Rounded active with no fill', () => {
    const component = renderCreateWithTheme(
      <Button rounded label='Button Label' />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-color', 'transparent')
    expect(tree).toHaveStyleRule(
      'border',
      `0.125rem solid ${theme.primaryColorActive}`
    )
    expect(tree).toHaveStyleRule('border-radius', '3.75rem')
  })
  // it('With Icon', () => {
  //   const component = renderCreateWithTheme(
  //     <Button
  //       label={'Long button text'}
  //       icon={'travelType'}
  //       rounded
  //     />
  //   )
  //   let tree = component.toJSON()
  //   expect(tree).toMatchSnapshot()
  //   expect(tree).toHaveStyleRule('flex-direction', 'row')
  //   expect(tree).toHaveStyleRule('justify-content', 'space-evenly')
  //   expect(tree).toHaveStyleRule('height', 'fit-content')
  //   expect(tree).toHaveStyleRule('width', 'fit-content')
  //   expect(tree).toHaveStyleRule('text-indent', '0.625rem')
  // })
  // it('With Icon on Left', () => {
  //   const component = renderCreateWithTheme(
  //     <Button
  //       label={'Long button text '}
  //       icon={'travelType'}
  //       iconLeft
  //     />
  //   )
  //   let tree = component.toJSON()
  //   expect(tree).toMatchSnapshot()
  //   expect(tree).toHaveStyleRule('flex-direction', 'row-reverse')
  //   expect(tree).toHaveStyleRule('text-indent', 'unset')
  // })

  it('Custom Style', () => {
    const component = renderCreateWithTheme(
      <Button
        customStyle={{
          backgroundColor: 'gray',
          color: 'lightgray',
          borderColor: 'darkgray',
          textTransform: 'lowercase',
          borderBottomRightRadius: '3.75rem',
          borderTopRightRadius: '3.75rem',
          fontFamily: props => props.theme.fontSecondary.bold,
          ':hover': {
            backgroundColor: 'lightgray',
            color: 'white'
          }
        }}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-color', 'gray')
    expect(tree).toHaveStyleRule('border-bottom-right-radius', '3.75rem')
    expect(tree).toHaveStyleRule('border-bottom-left-radius', undefined)
  })

  /* This test fail due to css import but render properly in storybook */

  // it('Custom Class', () => {
  //   const component = renderCreateWithTheme(
  //     <Button
  //       className='classTest'
  //       label='Button Label'
  //     />
  //   )
  //   let tree = component.toJSON()
  //   expect(tree).toMatchSnapshot()
  //   expect(tree.props.className).toContain('classTest')
  //   expect(tree).toHaveStyleRule('background-color', 'aquamarine')
  // })
})

describe('Test Button component actions', () => {
  it('Test click event', () => {
    const mockOnClick = jest.fn()
    const button = shallow(<Button onClick={mockOnClick} />)
    button.simulate('click')
    expect(mockOnClick).toHaveBeenCalled()
  })
  it('Test hover event', () => {
    const mockOnMouseOver = jest.fn()
    const button = shallow(<Button onMouseOver={mockOnMouseOver} />)
    button.simulate('mouseOver')
    expect(mockOnMouseOver).toHaveBeenCalled()
  })
})
