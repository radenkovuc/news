import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import React from 'react'

import Layout from '../components/Layout'
import ContainerWithMessage from '../components/ContainerWithMessage'

const Error = () => (
  <Layout disableSelectionCountry={true}>
    <ContainerWithMessage message={'ERROR_PAGE_MESSAGE'} />
  </Layout>
)

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Error
