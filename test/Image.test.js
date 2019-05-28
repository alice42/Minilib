import React from 'react'
import Image from '../src/common/Image/Image'
import 'jest-styled-components'
import { renderCreateWithThemeJSON } from './TestUtils'
import { theme } from '../src/Theme'

const src = '/image/koala.jpg'

test(':src', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src} />)
  ]
  expect(Image).toThrow(Error)
  expect(comps[0].children).not.toBeNull()
  expect(comps[0].children[0].type).toEqual('img')
  expect(comps[0].children[0].props.src).toEqual(src)
  expect(comps[0]).toMatchSnapshot()
})

test(':height & :width', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src} height={'200px'} width={'500px'} />),
    renderCreateWithThemeJSON(<Image src={src} height={'200px'} />),
    renderCreateWithThemeJSON(<Image src={src} width={'500px'} />)
  ]
  expect(comps[0]).toHaveStyleRule('height', '200px', { modifier: '& > img' })
  expect(comps[0]).toHaveStyleRule('width', '500px', { modifier: '& > img' })
  expect(comps[1]).toHaveStyleRule('height', '200px', { modifier: '& > img' })
  expect(comps[1]).not.toHaveStyleRule('width', { modifier: '& > img' })
  expect(comps[2]).toHaveStyleRule('width', '500px', { modifier: '& > img' })
  expect(comps[2]).not.toHaveStyleRule('height', { modifier: '& > img' })
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toMatchSnapshot()
})

test(':object-fit', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src} />),
    renderCreateWithThemeJSON(<Image src={src} cover />),
    renderCreateWithThemeJSON(<Image src={src} contain />),
    renderCreateWithThemeJSON(<Image src={src} filled />),
    renderCreateWithThemeJSON(<Image src={src} cover={false} />),
    renderCreateWithThemeJSON(<Image src={src} asBackground cover />),
    renderCreateWithThemeJSON(<Image src={src} asBackground contain />),
    renderCreateWithThemeJSON(<Image src={src} asBackground filled />),
    renderCreateWithThemeJSON(<Image src={src} asBackground />)
  ]
  expect(comps[0]).toHaveStyleRule('object-fit', 'unset', { modifier: '& > img' })
  expect(comps[1]).toHaveStyleRule('object-fit', 'cover', { modifier: '& > img' })
  expect(comps[2]).toHaveStyleRule('object-fit', 'contain', { modifier: '& > img' })
  expect(comps[3]).toHaveStyleRule('object-fit', 'fill', { modifier: '& > img' })
  expect(comps[4]).toHaveStyleRule('object-fit', 'unset', { modifier: '& > img' })
  expect(comps[5]).toHaveStyleRule('background-size', 'cover', { modifier: '& > div:first-child' })
  expect(comps[6]).toHaveStyleRule('background-size', 'contain', { modifier: '& > div:first-child' })
  expect(comps[7]).toHaveStyleRule('background-size', '100% 100%', { modifier: '& > div:first-child' })
  expect(comps[8]).toHaveStyleRule('background-size', 'auto', { modifier: '& > div:first-child' })
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toMatchSnapshot()
  expect(comps[3]).toMatchSnapshot()
  expect(comps[4]).toMatchSnapshot()
})

test(':rounded', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src} />),
    renderCreateWithThemeJSON(<Image src={src} rounded />),
    renderCreateWithThemeJSON(<Image src={src} rounded={'87px'} />)
  ]
  expect(comps[0]).not.toHaveStyleRule('border-radius', { modifier: '& > img' })
  expect(comps[1]).toHaveStyleRule('border-radius', theme.borderRadius, { modifier: '& > img' })
  expect(comps[2]).toHaveStyleRule('border-radius', '87px', { modifier: '& > img' })
  expect(comps[1]).toMatchSnapshot()
})

test(':asBackground', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src} />),
    renderCreateWithThemeJSON(<Image src={src} asBackground />),
    renderCreateWithThemeJSON(<Image src={src} mosaic />),
    renderCreateWithThemeJSON(<Image src={src} mosaic={'50px 50px'} />)
  ]
  expect(comps[0]).not.toHaveStyleRule('background-image', { modifier: '& > div:first-child' })
  expect(comps[0]).not.toHaveStyleRule('background-size', { modifier: '& > div:first-child' })
  expect(comps[1]).toHaveStyleRule('background-image', `url(${src})`, { modifier: '& > div:first-child' })
  expect(comps[1]).toHaveStyleRule('background-size', 'auto', { modifier: '& > div:first-child' })
  expect(comps[2]).toHaveStyleRule('background-image', `url(${src})`, { modifier: '& > div:first-child' })
  expect(comps[2]).toHaveStyleRule('background-size', '100px 100px', { modifier: '& > div:first-child' })
  expect(comps[2]).toHaveStyleRule('background-repeat', 'repeat', { modifier: '& > div:first-child' })
  expect(comps[3]).toHaveStyleRule('background-size', '50px 50px', { modifier: '& > div:first-child' })
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toMatchSnapshot()
  expect(comps[3]).toMatchSnapshot()
})

test(':filter', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src} blur={'5px'} />),
    renderCreateWithThemeJSON(<Image src={src} asBackground blur={'5px'} />)
  ]
  expect(comps[0]).toHaveStyleRule('filter', `blur(5px)`, { modifier: '& > img' })
  expect(comps[1]).toHaveStyleRule('filter', `blur(5px)`, { modifier: '& > div:first-child' })
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).toMatchSnapshot()
})

test(':title & :alt', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src} />),
    renderCreateWithThemeJSON(<Image src={src} title={'HelloWorld!'} />),
    renderCreateWithThemeJSON(<Image src={'noSlashAndNoPoint'} />)
  ]
  expect(comps[0].children[0].props.title).toEqual('koala')
  expect(comps[0].children[0].props.alt).toEqual('koala.jpg')
  expect(comps[1].children[0].props.title).toEqual('HelloWorld!')
  expect(comps[1].children[0].props.alt).toEqual('koala.jpg')
  expect(comps[2].children[0].props.alt).toEqual('noSlashAndNoPoint')
  expect(comps[2].children[0].props.title).toEqual('noSlashAndNoPoint')
})

test(':border', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src}>Hello</Image>),
    renderCreateWithThemeJSON(<Image src={src} border>Hello</Image>),
    renderCreateWithThemeJSON(<Image src={src} border={'dashed 2px red'} />)
  ]
  expect(comps[0]).not.toHaveStyleRule('border', { modifier: '& > img' })
  expect(comps[0]).not.toHaveStyleRule('box-sizing', { modifier: '& > img' })
  expect(comps[1]).toHaveStyleRule('border', theme.border, { modifier: '& > img' })
  expect(comps[1]).toHaveStyleRule('box-sizing', 'border-box', { modifier: '& > img' })
  expect(comps[2]).toHaveStyleRule('border', 'dashed 2px red', { modifier: '& > img' })
  expect(comps[2]).toHaveStyleRule('box-sizing', 'border-box', { modifier: '& > img' })
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toMatchSnapshot()
})

test(':overlay', () => {
  const comps = [
    renderCreateWithThemeJSON(<Image src={src}>Hello</Image>),
    renderCreateWithThemeJSON(<Image src={src} overlay={{ dark: true }} />)
  ]
  expect(comps[0].children.length).toEqual(2)
  expect(comps[1].children.length).toEqual(2)
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).toMatchSnapshot()
})
