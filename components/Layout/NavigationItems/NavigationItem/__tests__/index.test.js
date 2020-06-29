import React from 'react'
import renderer from 'react-test-renderer'
import NavigationItem from '../index'

describe('<NavigationItem />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<NavigationItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
