import React from 'react'
import renderer from 'react-test-renderer'
import CountryItem from '../index'

describe('<CountryItem />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<CountryItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
