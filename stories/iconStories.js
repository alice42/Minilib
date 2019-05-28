import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Icon from '../src/common/Icons/Icon'

export const icons = {
  action: require.context('../src/common/statics/action', true, /\.svg$/).keys(),
  flags: require.context('../src/common/statics/flags', true, /\.svg$/).keys(),
  informative: require.context('../src/common/statics/informative', true, /\.svg$/).keys(),
  navigation: require.context('../src/common/statics/navigation', true, /\.svg$/).keys(),
  ordersStatus: require.context('../src/common/statics/ordersStatus', true, /\.svg$/).keys(),
  player: require.context('../src/common/statics/player', true, /\.svg$/).keys(),
  reinsurance: require.context('../src/common/statics/reinsurance', true, /\.svg$/).keys(),
  social: require.context('../src/common/statics/social', true, /\.svg$/).keys(),
  sponsorship: require.context('../src/common/statics/sponsorship', true, /\.svg$/).keys(),
  travel: require.context('../src/common/statics/travel', true, /\.svg$/).keys(),
  universe: require.context('../src/common/statics/universe', true, /\.svg$/).keys()
}

storiesOf('Icons Vp', module)
storiesOf('Icons Vp/Usage', module)
  .add('Simple', () => {
    return <Icon name={text('Icon name', 'discountCoupon')} />
  })
  .add('With props', () => {
    return <Icon name={text('Icon name', 'discountCoupon')}
      iconColor={text('Icon color', 'blue')}
      iconSize={text('Icon size', '3rem')} />
  })
Object.keys(icons).forEach(section => {
  const stories = storiesOf(`Icons VP/All/${section}`, module)
  const sectionIcons = icons[section]

  sectionIcons.forEach((name) => {
    const iconName = name.replace('./', '').replace('.svg', '')

    stories.add(iconName, () => <Icon name={iconName} />)
  })
})
