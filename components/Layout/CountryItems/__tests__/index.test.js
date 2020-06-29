import React from 'react'
import renderer from 'react-test-renderer'
import CountryItems from '../index'

describe('<CountryItems />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<CountryItems />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
