import React from 'react'
import InputText from '../src/common/Inputs/InputText/InputText'
import 'jest-styled-components'
import { renderCreateWithTheme, mountWithTheme } from './TestUtils'
import { shallow } from 'enzyme'
import { theme } from '../src/Theme.js'

describe('Test simple InputText component props', () => {
  it('Simple type default', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} />
    )
    expect(component.find('input').prop('aria-label')).toEqual('Label')
    expect(component.find('input').prop('type')).toEqual('text')
  })
  it('type text', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputType={'text'} />
    )
    expect(component.find('input').prop('type')).toEqual('text')
  })
  it('type password', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputType={'password'} />
    )
    expect(component.find('input').prop('type')).toEqual('password')
  })
  it('type email', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputType={'email'} />
    )
    expect(component.find('input').prop('type')).toEqual('email')
  })
  it('type number', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputType={'number'} />
    )
    expect(component.find('input').prop('type')).toEqual('number')
  })
  it('type url', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputType={'url'} />
    )
    expect(component.find('input').prop('type')).toEqual('url')
  })
  it('bad type', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputType={'foo'} />
    )
    expect(component.find('input').prop('type')).toEqual('text')
  })
  it('Simple placeholder', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} placeholder={'Placeholder'} />
    )
    expect(component.find('input').prop('placeholder')).toEqual('Placeholder')
  })
})

describe('Test styled InputText component props', () => {
  it('lined text', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputStyle={'Lined'} />
    )
    expect(component.find('input').prop('type')).toEqual('text')
  })
  it('lined password', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} type={'password'} inputStyle={'Lined'} />
    )
    expect(component.find('input').prop('type')).toEqual('password')
  })
  it('lined placeholder', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} placeholder={'Placeholder'} inputStyle={'Lined'} />
    )
    expect(component.find('input').prop('placeholder')).toEqual('Placeholder')
  })
  it('Outlined text', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} inputStyle={'Outlined'} />
    )
    expect(component.find('input').prop('type')).toEqual('text')
  })
  it('Outlined password', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} type={'password'} inputStyle={'Outlined'} />
    )
    expect(component.find('input').prop('type')).toEqual('password')
  })
  it('Outlined placeholder', () => {
    const component = mountWithTheme(
      <InputText label={'Label'} placeholder={'Placeholder'} inputStyle={'Outlined'} />
    )
    expect(component.find('input').prop('placeholder')).toEqual('Placeholder')
  })
})

describe('Test simple InputText component rendering', () => {
  it('Simple', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-color', undefined)
  })
  it('Simple full width', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} fullWidth />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '-webkit-fill-available', { modifier: '.input' })
  })
  it('Simple with label Top', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} withLabelTop />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('flex-direction', 'column')
  })
  it('Simple with custom style input', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} customStyle={{ color: 'red' }} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'red', { modifier: '.input' })
  })
  it('Simple with custom style label', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} withLabel customStyleLabel={{ color: 'red' }} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'red', { modifier: 'label' })
  })
})

describe('Test styled InputText component rendering', () => {
  it('Lined', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'Lined'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'none', { modifier: 'label' })
  })
  it('Lined full width', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'Lined'} fullWidth />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '-webkit-fill-available', { modifier: 'label' })
  })
  it('Outlined', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'Outlined'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'none', { modifier: 'label' })
    expect(tree).toHaveStyleRule('background', theme.primaryColor, { modifier: '.inputStyle .border' })
  })
  it('Outlined full width', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'Outlined'} fullWidth />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '-webkit-fill-available', { modifier: 'label' })
  })
  it('LinedAnim', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'LinedAnim'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'none', { modifier: 'label' })
    expect(tree).toHaveStyleRule('background', theme.primaryColor, { modifier: '.inputStyle .border' })
  })
  it('OutlinedAnim', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'OutlinedAnim'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'none', { modifier: 'label' })
    expect(tree).toHaveStyleRule('background', theme.primaryColor, { modifier: '.inputStyle .border' })
  })
  it('Lined Background', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'Lined'} backgroundColor={'lightgray'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'lightgray', { modifier: 'label' })
    expect(tree).toHaveStyleRule('background', theme.primaryColor, { modifier: '.inputStyle .border' })
  })
  it('Lined Background radius', () => {
    const component = renderCreateWithTheme(
      <InputText label={'Label'} inputStyle={'Lined'} backgroundColor={'lightgray'} backgroundRadius />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'lightgray', { modifier: 'label' })
    expect(tree).toHaveStyleRule('border-top-left-radius', '0.3125rem', { modifier: 'label' })
    expect(tree).toHaveStyleRule('border-top-right-radius', '0.3125rem', { modifier: 'label' })
  })
  it('Outlined with customs colors', () => {
    const component = renderCreateWithTheme(
      <InputText color={'red'} colorFocus={'orange'} inputStyle={'OutlinedAnim'} label={'Label'} placeholder={'Placeholder'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'red', { modifier: '.inputStyle .label' })
    expect(tree).toHaveStyleRule('background', 'orange', { modifier: '.inputStyle .border' })
  })
})

describe('Test Input component actions', () => {
  it('Test change function call', () => {
    const mockOnClick = jest.fn()
    const input = shallow((<InputText onChange={mockOnClick} label={'Label'} />))
    input.simulate('change', { target: { value: 'new value' } })
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith({ target: { value: 'new value' } })
  })
  it('Test changed value', () => {
    const wrapper = mountWithTheme(<InputText label={'Label'} />)
    expect(wrapper.find('input').prop('value')).toEqual('')
    wrapper.find('input').simulate('change', { target: { value: 'Changed' } })
    expect(wrapper.find('input').prop('value')).toEqual('Changed')
  })
})
