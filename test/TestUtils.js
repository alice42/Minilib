import React from 'react'
import { theme } from '../src/Theme.js'
import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

export const renderCreateWithTheme = (component) => renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
export const renderCreateWithThemeJSON = (component) => renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>).toJSON()
export const mountWithTheme = (component) => mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
