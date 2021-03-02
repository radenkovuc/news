import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../test/TestUtil'

import ContainerWithMessage from '../'

describe('<ContainerWithMessage />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(createTextComponent(<ContainerWithMessage />)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
