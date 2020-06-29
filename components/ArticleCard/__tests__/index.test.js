import React from 'react'
import ArticleCard from '../'
import renderer from 'react-test-renderer'

describe('<ArticleCard />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(<ArticleCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
