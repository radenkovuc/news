import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../../../test/TestUtil'

import CountryItem from '../'

describe('<CountryItem />', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(createTextComponent(<CountryItem />)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('match snapshot with data', () => {
    const tree = renderer
      .create(createTextComponent(<CountryItem text="Text" isActive={true} isDisabled={true} />))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
