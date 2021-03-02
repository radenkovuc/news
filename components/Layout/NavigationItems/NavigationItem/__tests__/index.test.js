import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../../../test/TestUtil'

import NavigationItem from '../'

describe('<NavigationItem />', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(createTextComponent(<NavigationItem />)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('match snapshot with data', () => {
    const tree = renderer
      .create(createTextComponent(<NavigationItem text="Text" isActive={true} link="/link" />))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
