import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../../test/TestUtil'

import NavigationItems from '../'

describe('<NavigationItems />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(createTextComponent(<NavigationItems />)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
