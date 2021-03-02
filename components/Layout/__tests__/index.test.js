import React from 'react'
import renderer from 'react-test-renderer'

import {createTextComponent} from '../../../test/TestUtil'

import Layout from '../'

describe('<Layout />', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(createTextComponent(<Layout />)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('match snapshot with data', () => {
    const tree = renderer
      .create(
        createTextComponent(
          <Layout disableSelectionCountry={true} title="Title">
            <div>Test</div>
          </Layout>
        )
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
