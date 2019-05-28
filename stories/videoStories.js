import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object, color, number } from '@storybook/addon-knobs'
import Video from '../src/common/Video/Video'

import src from './public/video/video.mp4'

storiesOf('Video', module)
  .add('default', () =>
    <Video contain={boolean('contain', false)}
      cover={boolean('cover', false)}
      filled={boolean('filled', false)} src={text('src', src)}
    />
  )
  .add('advanced', () =>
    <Video
      src={text('src', src)}
      poster={text('poster', '')}
      contain={boolean('contain', false)}
      cover={boolean('cover', false)}
      filled={boolean('filled', true)}
      rounded={boolean('rounded', true)}
      blur={text('blur', '1px')}
      height={text('height', '400px')}
      autoplay={boolean('autoplay', true)}
      loop={boolean('loop', true)}
      controls={boolean('controls', true)}
      customStyle={object('customStyle', {})}
    />
  )
  .add('borders', () =>
    <Video
      width='500px'
      height='400px'
      border={boolean('border', true)}
      src={src}
    />
  )
  .add('poster', () => <Video height='300px' cover src={src} poster={text('poster', '/image/koala.jpg')} />)
  .add('overlay', () =>
    <Video
      src={src}
      cover
      blur={text('blur', '15px')}
      height={text('height', '600px')}
      autoplay
      loop
      controls={false}
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
    >
      Hello World !
      <Video src={src} width='200px' height='200px' cover autoplay loop overlay={{ dark: true, fullsize: false, left: true, right: true }}>
        <center>Overlay-ception</center>
      </Video>
    </Video>
  )
