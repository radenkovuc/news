import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../test/TestUtil'
import {mockedArticles} from '../../../test/MockedData'

import Category from '../'

describe('<Category />', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(createTextComponent(<Category />)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('match snapshot with articles', () => {
    const tree = renderer
      .create(createTextComponent(<Category articles={mockedArticles} />))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
