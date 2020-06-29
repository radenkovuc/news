import React from 'react'
import Article from '../'
import renderer from 'react-test-renderer'

describe('<Article />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<Article />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
