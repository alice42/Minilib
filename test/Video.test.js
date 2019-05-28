import React from 'react'
import Video from '../src/common/Video/Video'
import 'jest-styled-components'
import { renderCreateWithThemeJSON } from './TestUtils'
import { theme } from '../src/Theme'

const src = '/video/video.mp4'

test(':src', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src} />)
  ]
  expect(Video).toThrow()
  expect(comps[0].children).not.toBeNull()
  expect(comps[0].children[0]).not.toBeNull()
  expect(comps[0].children[0].children[0].type).toEqual('video')
  expect(comps[0].children[0].children[0].children[1].type).toEqual('source') // children[1] because of the no HTML5 browser display message in children[0]
  expect(comps[0].children[0].children[0].children[1].props.src).toEqual(src)
  expect(comps[0]).toMatchSnapshot()
})

test(':height & :width', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src} height={'200px'} width={'500px'} />),
    renderCreateWithThemeJSON(<Video src={src} height={'200px'} />),
    renderCreateWithThemeJSON(<Video src={src} width={'500px'} />)
  ]
  expect(comps[0]).toHaveStyleRule('height', '200px', { modifier: '& > div:first-of-type' })
  expect(comps[0]).toHaveStyleRule('width', '500px')
  expect(comps[0]).toHaveStyleRule('width', 'unset', { modifier: '& > div:first-of-type > video' })
  expect(comps[1]).toHaveStyleRule('height', '200px', { modifier: '& > div:first-of-type' })
  expect(comps[1]).not.toHaveStyleRule('width')
  expect(comps[2]).toHaveStyleRule('width', '500px')
  expect(comps[2]).not.toHaveStyleRule('height', { modifier: '& > div:first-of-type' })
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toMatchSnapshot()
})

test(':object-fit', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src} />),
    renderCreateWithThemeJSON(<Video src={src} cover />),
    renderCreateWithThemeJSON(<Video src={src} contain />),
    renderCreateWithThemeJSON(<Video src={src} filled />),
    renderCreateWithThemeJSON(<Video src={src} cover={false} />)
  ]
  expect(comps[0]).toHaveStyleRule('object-fit', 'unset', { modifier: '& > div:first-of-type > video' })
  expect(comps[1]).toHaveStyleRule('object-fit', 'cover', { modifier: '& > div:first-of-type > video' })
  expect(comps[2]).toHaveStyleRule('object-fit', 'contain', { modifier: '& > div:first-of-type > video' })
  expect(comps[3]).toHaveStyleRule('object-fit', 'fill', { modifier: '& > div:first-of-type > video' })
  expect(comps[4]).toHaveStyleRule('object-fit', 'unset', { modifier: '& > div:first-of-type > video' })
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toMatchSnapshot()
  expect(comps[3]).toMatchSnapshot()
  expect(comps[4]).toMatchSnapshot()
})

test(':rounded', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src} />),
    renderCreateWithThemeJSON(<Video src={src} rounded />),
    renderCreateWithThemeJSON(<Video src={src} rounded={'87px'} />)
  ]
  expect(comps[0]).not.toHaveStyleRule('border-radius', { modifier: '& > div:first-of-type' })
  expect(comps[1]).toHaveStyleRule('border-radius', theme.borderRadius, { modifier: '& > div:first-of-type' })
  expect(comps[2]).toHaveStyleRule('border-radius', '87px', { modifier: '& > div:first-of-type' })
  expect(comps[1]).toMatchSnapshot()
})

test(':filter', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src} asBackground blur={'5px'} />)
  ]
  expect(comps[0]).toHaveStyleRule('filter', `blur(5px)`, { modifier: '& > div:first-of-type > video' })
  expect(comps[0]).toMatchSnapshot()
})

test(':title & :alt', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src} />),
    renderCreateWithThemeJSON(<Video src={src} title={'HelloWorld!'} />),
    renderCreateWithThemeJSON(<Video src={'noSlashAndNoPoint'} />)
  ]
  expect(comps[0].children[0].children[0].props.title).toEqual('video')
  expect(comps[0].children[0].children[0].props.alt).toEqual('video.mp4')
  expect(comps[1].children[0].children[0].props.title).toEqual('HelloWorld!')
  expect(comps[1].children[0].children[0].props.alt).toEqual('video.mp4')
  expect(comps[2].children[0].children[0].props.alt).toEqual('noSlashAndNoPoint')
  expect(comps[2].children[0].children[0].props.title).toEqual('noSlashAndNoPoint')
})

test(':border', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src}>Hello</Video>),
    renderCreateWithThemeJSON(<Video src={src} border>Hello</Video>),
    renderCreateWithThemeJSON(<Video src={src} border={'dashed 2px red'} />)
  ]
  expect(comps[0]).not.toHaveStyleRule('border', { modifier: '& > div:first-of-type' })
  expect(comps[0]).not.toHaveStyleRule('box-sizing', { modifier: '& > div:first-of-type' })
  expect(comps[1]).toHaveStyleRule('border', theme.border, { modifier: '& > div:first-of-type' })
  expect(comps[1]).toHaveStyleRule('box-sizing', 'border-box', { modifier: '& > div:first-of-type' })
  expect(comps[2]).toHaveStyleRule('border', 'dashed 2px red', { modifier: '& > div:first-of-type' })
  expect(comps[2]).toHaveStyleRule('box-sizing', 'border-box', { modifier: '& > div:first-of-type' })
  expect(comps[1]).toMatchSnapshot()
  expect(comps[2]).toMatchSnapshot()
})

test(':overlay', () => {
  const comps = [
    renderCreateWithThemeJSON(<Video src={src}>Hello</Video>),
    renderCreateWithThemeJSON(<Video src={src} overlay={{ dark: true }} />)
  ]
  expect(comps[0].children.length).toEqual(2)
  expect(comps[1].children.length).toEqual(2)
  expect(comps[0]).toMatchSnapshot()
  expect(comps[1]).toMatchSnapshot()
})
