import React from 'react'

import Layout from '../components/Layout'
import ContainerWithMessage from '../components/ContainerWithMessage'

const Error = () => {
  return (
    <Layout disableSelectionCountry={true}>
      <ContainerWithMessage message={'ERROR_PAGE_MESSAGE'} />
    </Layout>
  )
}

export default Error
