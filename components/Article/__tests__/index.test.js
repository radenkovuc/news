import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../test/TestUtil'
import { mockedArticle } from "../../../test/MockedData";

import Article from '../'

describe('<Article />', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(createTextComponent(<Article />)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('match snapshot default', () => {
    const tree = renderer.create(createTextComponent(<Article article={mockedArticle}/>)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
