import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../test/TestUtil'
import { mockedArticles } from "../../../test/MockedData";

import Articles from '../'

describe('<Articles />', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(createTextComponent(<Articles />)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('match snapshot with articled', () => {
    const tree = renderer.create(createTextComponent(<Articles articles={mockedArticles}/>)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
