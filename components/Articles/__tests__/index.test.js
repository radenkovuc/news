import React from 'react'
import renderer from 'react-test-renderer'
import Articles from '../'

describe('<Articles />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<Articles />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
