import React from 'react'
import 'jest-styled-components'
import { renderCreateWithTheme } from './TestUtils'
import IconMock from './svgrMock'
// import { shallow, mount } from 'enzyme';

test('Basic Icon', () => {
  const component = renderCreateWithTheme(<IconMock name={'butterfly'} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // expect(tree).toHaveStyleRule('color', '#464650')
  // expect(tree).toHaveStyleRule('width', '2rem')
  // expect(tree).toHaveStyleRule('height', '2rem')
})
test('Custom Icon', () => {
  const component = renderCreateWithTheme(
    <IconMock name={'butterfly'} iconSize={'7rem'} iconColor={'red'} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  // expect(tree).toHaveStyleRule('color', 'red')
  // expect(tree).toHaveStyleRule('width', '7rem')
  // expect(tree).toHaveStyleRule('height', '7rem')
})
