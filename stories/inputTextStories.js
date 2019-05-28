import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object, select } from '@storybook/addon-knobs'
import InputText from '../src/common/Inputs/InputText/InputText'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

const Display = styled.div`
`
const DisplayRow = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
`
export const actions = {
  onChange: action('Value Changed')
}

storiesOf('Inputs/InputText/Simples', module)
  .add('Simple', () => {
    return <InputText label={text('label', 'Input')} onChange={action('Value Changed')} />
  })
  .add('Simple type (default type text)', () => {
    return (
      <InputText inputType={select('type', {
        password: 'password',
        text: 'text',
        email: 'email',
        number: 'number',
        url: 'url'
      }, 'text')} label={text('label', 'Input type')} />
    )
  })
  .add('Simple with placeholder', () => {
    return <InputText label={text('label', 'Input')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Simple full width', () => {
    return <InputText label={text('label', 'Input')} fullWidth={boolean('fullWidth', true)} />
  })
  .add('Simple with label showing (side)', () => {
    return <InputText label={text('label', 'Input')} withLabel={boolean('withLabel', true)} />
  })
  .add('Simple with label showing (top)', () => {
    return <InputText label={text('label', 'Input')} withLabelTop={boolean('withLabelTop', true)} />
  })
  .add('Simple with custom style input', () => {
    return <InputText label={text('label', 'Input')}
      customStyle={object('custom style', {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottomColor: 'coral',
        color: 'green',
        fontFamily: 'fantasy'
      })} />
  })
  .add('Simple with custom style label and custom style input', () => {
    return <InputText label={text('label', 'Input')} withLabel={boolean('withLabel', true)}
      customStyle={{
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottomColor: 'coral',
        color: 'green',
        fontFamily: 'fantasy',
        ':focus': {
          boxShadow: '0 0 0.25rem 0.125rem red'
        }
      }}
      customStyleLabel={object('custom style', {
        marginRight: '1.5625rem',
        color: 'red',
        fontSize: 20
      })} />
  })
storiesOf('Inputs/InputText/Styled', module)
storiesOf('Inputs/InputText/Styled/Demo', module)
  .add('All', () => {
    return (
      <Display>
        <DisplayRow>
          <InputText inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText backgroundColor={text('backgroundColor', 'lightgray')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        </DisplayRow>
        <InputText fullWidth inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth backgroundColor={text('backgroundColor', 'lightgray')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <DisplayRow>
          <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} backgroundRadius={text('backgroundRadius', true)} backgroundColor={text('backgroundColor', 'lightgray')} backgroundColorFocus={text('backgroundColorFocus', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
          <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        </DisplayRow>
        <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} backgroundRadius={text('backgroundRadius', true)} backgroundColor={text('backgroundColor', 'lightgray')} backgroundColorFocus={text('backgroundColorFocus', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
        <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
      </Display >
    )
  })
storiesOf('Inputs/InputText/Styled/Lined', module)
storiesOf('Inputs/InputText/Styled/Lined/Lined Simple', module)
  .add('Lined', () => {
    return <InputText inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined full width', () => {
    return <InputText fullWidth inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined custom colors', () => {
    return <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined full width custom colors', () => {
    return <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
storiesOf('Inputs/InputText/Styled/Lined/Lined with background', module)
  .add('Lined with background', () => {
    return <InputText backgroundColor={text('backgroundColor', 'lightgray')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined with background full width', () => {
    return <InputText fullWidth backgroundColor={text('backgroundColor', 'lightgray')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined with background custom colors', () => {
    return <InputText backgroundColor={text('backgroundColor', 'lightgray')} backgroundColorFocus={text('backgroundColorFocus', 'pink')} colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined with background full width custom colors', () => {
    return <InputText fullWidth backgroundColor={text('backgroundColor', 'lightgray')} backgroundColorFocus={text('backgroundColorFocus', 'pink')} colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined with background radius', () => {
    return <InputText backgroundRadius backgroundColor={text('backgroundColor', 'lightgray')} inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined with background full width and radius', () => {
    return <InputText backgroundRadius backgroundColor={text('backgroundColor', 'lightgray')} fullWidth inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined with background custom color, full width and radius', () => {
    return <InputText backgroundRadius colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} backgroundColor={text('backgroundColor', 'lightgray')} backgroundColorFocus={text('backgroundColorFocus', 'pink')} fullWidth inputStyle={text('InputStyle', 'Lined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
storiesOf('Inputs/InputText/Styled/Lined/LinedAnim', module)
  .add('LinedAnim', () => {
    return <InputText inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('LinedAnim full width', () => {
    return <InputText fullWidth inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('LinedAnim custom colors', () => {
    return <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Lined full width custom colors', () => {
    return <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'LinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
storiesOf('Inputs/InputText/Styled/Outlined', module)
storiesOf('Inputs/InputText/Styled/Outlined/Outlined Simple', module)
  .add('Outlined', () => {
    return <InputText inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Outlined full width', () => {
    return <InputText fullWidth inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Outlined custom colors', () => {
    return <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('Outlined full width custom colors', () => {
    return <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'Outlined')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
storiesOf('Inputs/InputText/Styled/Outlined/OutlinedAnim', module)
  .add('OutlinedAnim', () => {
    return <InputText inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('OutlinedAnim full width', () => {
    return <InputText fullWidth inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('OutlinedAnim custom colors', () => {
    return <InputText colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
  .add('OutlinedAnim full width custom colors', () => {
    return <InputText fullWidth colorFocus={text('colorFocus', '#EC2B8C')} color={text('color', 'pink')} inputStyle={text('InputStyle', 'OutlinedAnim')} label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />
  })
