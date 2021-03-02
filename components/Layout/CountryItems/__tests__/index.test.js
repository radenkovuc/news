import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../../test/TestUtil'

import CountryItems from '../'

describe('<CountryItems />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(createTextComponent(<CountryItems/>)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
