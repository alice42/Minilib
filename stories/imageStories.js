import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object, number, color } from '@storybook/addon-knobs'
import Image from '../src/common/Image/Image'

import src from './public/image/koala.jpg'

storiesOf('Image', module)
  .add('default', () => <Image src={text('src', src)} />)
  .add('advanced', () =>
    <Image
      src={text('src', src)}
      contain={boolean('contain', false)}
      cover={boolean('cover', false)}
      filled={boolean('filled', false)}
      rounded={boolean('rounded', true)}
      blur={text('blur', '0px')}
      height={text('height', '200px')}
      width={text('width', '400px')}
      asBackground={boolean('asBackground', true)}
      mosaic={boolean('mosaic', false)}
      overlay={{}}
      customStyle={object('customStyle', {})}
    />
  )
  .add('border', () =>
    <Image
      width='500px'
      border={boolean('border', true)}
      src={src}
      rounded={boolean('rounded', true)}
    />
  )
  .add('cover', () => <Image height='300px' width='200px' cover={boolean('cover', true)} src={text('src', src)} />)
  .add('contain', () => <Image height='300px' width='200px' contain={boolean('contain', true)} src={text('src', src)} />)
  .add('filled', () => <Image height='300px' width='200px' filled={boolean('filled', true)} src={text('src', src)} />)
  .add('mosaic', () => <Image height='250px' width='600px' mosaic={boolean('mosaic', true)} src={src} />)
  .add('with overlay', () =>
    <Image
      blur='1px'
      cover
      height='600px'
      overlay={object('overlay', {
        dark: boolean('overlay: dark', true),
        light: boolean('overlay: light', false),
        color: color('overlay: color', 'white'),
        backgroundColor: color('overlay: backgroundColor', 'black'),
        opacity: number('overlay: opacity', 0.7),
        rounded: boolean('overlay: rounded', true),
        fullsize: boolean('overlay: fullsize', false),
        left: text('overlay: left', '80px'),
        right: boolean('overlay: right', false),
        top: boolean('overlay: top', true),
        bottom: boolean('overlay: bottom', true),
        margin: text('overlay: margin', '40px'),
        padding: text('overlay: padding', '30px'),
        customStyle: object('overlay: customStyle', {})
      })}
      src={src}
    >
      <p>Hello World !</p> <p>Im an in an Overlay</p>
    </Image>
  )
