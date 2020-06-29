import React from 'react'
import renderer from 'react-test-renderer'
import Category from '../'

describe('<Category />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<Category />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
