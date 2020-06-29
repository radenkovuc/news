import React from 'react'
import renderer from 'react-test-renderer'
import NavigationItems from '../index'

describe('<NavigationItems />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<NavigationItems />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
