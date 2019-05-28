import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '../src/common/Buttons/Button'
import '../test/classTest.css'

export const actions = {
  onClick: action('Button clicked'),
  onMouseOver: action('Button Hovered')
}

storiesOf('Button/Actions', module)
  .add('Without any actions set (default)', () => {
    return <Button label={text('label', 'text')} />
  })
  .add('With actions set', () => {
    return <Button label={text('label', 'text')} {...actions} />
  })

storiesOf('Button/Rendering', module)
  .add('With label', () => {
    return <Button label={text('label', 'text')} />
  })
  .add('Squared active with fill', () => {
    return <Button label={text('label', 'text')} fillBackground={boolean('fillBackground', true)} />
  })
  .add('Rounded active with fill', () => {
    return <Button label={text('label', 'text')} rounded={boolean('rounded', true)} fillBackground={boolean('fillBackground', true)} />
  })
  .add('Squared active with no fill', () => {
    return <Button label={text('label', 'text')} />
  })
  .add('Rounded active with no fill', () => {
    return <Button label={text('label', 'text')} rounded={boolean('rounded', true)} />
  })
  .add('With Icon', () => {
    return (
      <Button
        label={text('label', 'Long button text')}
        icon={text('icon', 'travel/travel_type')}
        fillBackground={boolean('fillBackground', true)}
        rounded={boolean('rounded', true)}
      />
    )
  })
  .add('With Icon on left', () => {
    return (
      <Button
        label={text('label', 'Click me !')}
        icon={text('icon', 'player/settings')}
        iconLeft={boolean('iconleft', true)}
      />
    )
  })
  .add('With Icon only', () => {
    return (
      <Button
        icon={text('icon', 'informative/question')}
        iconSize={text('iconSize', '3rem')}
        fillBackground={boolean('fillBackground', true)}
        rounded={boolean('rounded', true)}
      />
    )
  })
  .add('Custom Style', () => {
    return <Button
      label={text('label', 'Custom text')}
      customStyle={object('custom style', {
        backgroundColor: 'dimgray',
        color: 'white',
        borderColor: 'lightgray',
        textTransform: 'lowercase',
        borderBottomRightRadius: '3.75rem',
        borderTopRightRadius: '3.75rem',
        ':hover': {
          backgroundColor: 'gray',
          color: 'white'
        },
        ':focus': {
          boxShadow: '0 0 0.25rem 0.125rem red'
        }
      })} />
  })
  .add('Custom Class', () => {
    return <Button label={text('label', 'text')}
      className={select('Classname', {
        classBlue: 'classTest',
        classRed: 'classTest_red'
      }, 'classTest')} />
  })
