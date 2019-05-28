import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object, number, color } from '@storybook/addon-knobs'
import Overlay from '../src/common/Overlay/Overlay'

const containerStyle = {
  display: 'flex',
  justifyContent: 'center', // required, that's why it's a fragment and not a component
  backgroundColor: 'orange',
  height: '500px',
  width: '500px',
  position: 'relative'
}

storiesOf('<Fragment>: Overlay', module)
  .add('default', () =>
    <div style={containerStyle}>
      <Overlay>
        Hello World !
      </Overlay>
    </div>
  )
  .add('advanced', () =>
    <div style={containerStyle}>
      <Overlay
        dark={boolean('dark', true)}
        light={boolean('light', false)}
        color={color('color', 'white')}
        backgroundColor={color('backgroundColor', 'black')}
        opacity={number('opacity', 0.7)}
        rounded={boolean('rounded', true)}
        fullsize={boolean('fullsize', false)}
        left={text('left', '80px')}
        right={boolean('right', false)}
        top={boolean('top', true)}
        bottom={boolean('bottom', true)}
        margin={text('margin', '40px')}
        padding={text('padding', '30px')}
        customStyle={object('customStyle', {})}
      >
        Hello World !
      </Overlay>
    </div>
  )
  .add('fullsize', () =>
    <div style={containerStyle}>
      <Overlay
        dark
        fullsize={boolean('fullsize', true)}
        left={boolean('left', false)}
        right={boolean('right', false)}
        top={boolean('top', true)}
        bottom={boolean('bottom', true)}
      >
        Hello World !
      </Overlay>
    </div>
  )
  .add('margins and paddings', () =>
    <div style={containerStyle}>
      <Overlay
        dark
        fullsize={boolean('fullsize', false)}
        left={text('left', '80px')}
        right={boolean('right', true)}
        top={text('top', '0px')}
        margin={text('margin', '5px')}
        padding={text('padding', '30px')}
      >
        Hello World !
      </Overlay>
    </div>
  )
  .add('colors', () =>
    <div style={containerStyle}>
      <Overlay
        dark={boolean('dark', true)}
        light={boolean('light', false)}
        color={color('color', 'white')}
        backgroundColor={color('backgroundColor', 'black')}
        opacity={number('opacity', 0.7)}
      >
        Hello World !
      </Overlay>
    </div>
  )
