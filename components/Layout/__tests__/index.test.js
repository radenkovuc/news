import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '../index'

describe('<Layout />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
