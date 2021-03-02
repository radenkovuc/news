import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../test/TestUtil'

import ArticleCard from '../'

describe('<ArticleCard />', () => {
  it('match snapshot', () => {
    const tree = renderer.create(createTextComponent(<ArticleCard />)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
