import React from 'react'
import renderer from 'react-test-renderer'
import ContainerWithMessage from '../index'

describe('<ContainerWithMessage />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<ContainerWithMessage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
