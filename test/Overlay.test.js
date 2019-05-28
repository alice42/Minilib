import React from 'react'
import Overlay from '../src/common/Overlay/Overlay'
import 'jest-styled-components'
import { renderCreateWithThemeJSON } from './TestUtils'
import { theme } from '../src/Theme'
import { transparentize } from 'polished'

test('display', () => {
  const comps = [
    renderCreateWithThemeJSON(<Overlay />),
    renderCreateWithThemeJSON(<Overlay><p>Hello</p><span>World</span><h2>!!!</h2></Overlay>)
  ]
  expect(comps[0]).not.toBeNull()
  expect(comps[0].children).toBeNull()
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).not.toBeNull()
  expect(comps[1].children.length).toEqual(3)
  expect(comps[1]).toMatchSnapshot()
})

test(':top :left :right :bottom :fullsize', () => {
  const comps = [
    renderCreateWithThemeJSON(<Overlay fullsize />),
    renderCreateWithThemeJSON(<Overlay fullsize={false} top left right='23px' />),
    renderCreateWithThemeJSON(<Overlay fullsize right bottom='23px' />),
    renderCreateWithThemeJSON(<Overlay fullsize top='10px' left='0px' right='10%' />),
    renderCreateWithThemeJSON(<Overlay fullsize left />),
    renderCreateWithThemeJSON(<Overlay fullsize={false} bottom />),
    renderCreateWithThemeJSON(<Overlay fullsize={false} top='10px' bottom='15px' right left='5em' />)
  ]
  expect(comps[0]).toHaveStyleRule('justify-content', 'center')
  expect(comps[0]).toHaveStyleRule('align-items', 'center')
  expect(comps[0]).toHaveStyleRule('top', '0px')
  expect(comps[0]).toHaveStyleRule('bottom', '0px')
  expect(comps[0]).toHaveStyleRule('left', '0px')
  expect(comps[0]).toHaveStyleRule('right', '0px')
  expect(comps[0]).not.toHaveStyleRule('padding-top')
  expect(comps[0]).toMatchSnapshot()

  expect(comps[1]).toHaveStyleRule('justify-content', 'center')
  expect(comps[1]).toHaveStyleRule('align-items', 'center')
  expect(comps[1]).toHaveStyleRule('top', '0px')
  expect(comps[1]).toHaveStyleRule('bottom', 'auto')
  expect(comps[1]).toHaveStyleRule('left', '0px')
  expect(comps[1]).toHaveStyleRule('right', '23px')
  expect(comps[1]).not.toHaveStyleRule('padding-bottom')
  expect(comps[1]).toMatchSnapshot()

  expect(comps[2]).toHaveStyleRule('justify-content', 'flex-end')
  expect(comps[2]).toHaveStyleRule('align-items', 'flex-end')
  expect(comps[2]).toHaveStyleRule('top', '0px')
  expect(comps[2]).toHaveStyleRule('bottom', '0px')
  expect(comps[2]).toHaveStyleRule('left', '0px')
  expect(comps[2]).toHaveStyleRule('right', '0px')
  expect(comps[2]).not.toHaveStyleRule('padding-top')
  expect(comps[2]).toHaveStyleRule('padding-bottom', '23px')
  expect(comps[2]).toMatchSnapshot()

  expect(comps[3]).toHaveStyleRule('justify-content', 'flex-start')
  expect(comps[3]).toHaveStyleRule('padding-top', '10px')
  expect(comps[3]).toHaveStyleRule('padding-left', '0px')
  expect(comps[3]).toHaveStyleRule('padding-right', '10%')
  expect(comps[3]).toMatchSnapshot()
  expect(comps[4]).toHaveStyleRule('align-items', 'flex-start')

  expect(comps[5]).toHaveStyleRule('bottom', '0px')
  expect(comps[5]).toHaveStyleRule('top', 'auto')
  expect(comps[5]).toHaveStyleRule('left', 'auto')
  expect(comps[5]).toHaveStyleRule('right', 'auto')
  expect(comps[5]).toMatchSnapshot()

  expect(comps[6]).toHaveStyleRule('bottom', '15px')
  expect(comps[6]).toHaveStyleRule('top', '10px')
  expect(comps[6]).toHaveStyleRule('left', '5em')
  expect(comps[6]).toHaveStyleRule('right', '0px')
  expect(comps[6]).toMatchSnapshot()
})

test(':rounded', () => {
  const comps = [
    renderCreateWithThemeJSON(<Overlay />),
    renderCreateWithThemeJSON(<Overlay rounded />),
    renderCreateWithThemeJSON(<Overlay rounded={'87px'} />)
  ]
  expect(comps[0]).not.toHaveStyleRule('border-radius')
  expect(comps[1]).toHaveStyleRule('border-radius', theme.borderRadius)
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toHaveStyleRule('border-radius', '87px')
})

test(':colors', () => {
  const comps = [
    renderCreateWithThemeJSON(<Overlay />),
    renderCreateWithThemeJSON(<Overlay dark />),
    renderCreateWithThemeJSON(<Overlay dark backgroundColor={'blue'} color={'white'} />),
    renderCreateWithThemeJSON(<Overlay light />),
    renderCreateWithThemeJSON(<Overlay light opacity={0.1} backgroundColor={'blue'} color={'white'} />),
    renderCreateWithThemeJSON(<Overlay backgroundColor={'blue'} color={'white'} />)
  ]
  expect(comps[0]).toHaveStyleRule('background-color', 'transparent')
  expect(comps[0]).toHaveStyleRule('color', theme.onSurface)
  expect(comps[0]).toMatchSnapshot()

  expect(comps[1]).toHaveStyleRule('background-color', transparentize(1.0 - theme.overlayOpacity, theme.onBackground))
  expect(comps[1]).toHaveStyleRule('color', theme.backgroundColor)
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toHaveStyleRule('background-color', transparentize(1.0 - theme.overlayOpacity, 'white'))
  expect(comps[2]).toHaveStyleRule('color', 'blue')

  expect(comps[3]).toHaveStyleRule('background-color', transparentize(1.0 - theme.overlayOpacity, theme.backgroundColor))
  expect(comps[3]).toHaveStyleRule('color', theme.onBackground)
  expect(comps[3]).toMatchSnapshot()
  expect(comps[4]).toHaveStyleRule('background-color', transparentize(1.0 - 0.1, 'blue'))
  expect(comps[4]).toHaveStyleRule('color', 'white')
  expect(comps[4]).toMatchSnapshot()
  expect(comps[5]).toHaveStyleRule('background-color', transparentize(1.0 - theme.overlayOpacity, 'blue'))
  expect(comps[5]).toHaveStyleRule('color', 'white')
})
