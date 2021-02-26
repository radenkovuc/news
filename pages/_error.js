import React from 'react'

import Layout from '../components/Layout'
import ContainerWithMessage from '../components/ContainerWithMessage'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

const Error = () => {
  return (
    <Layout disableSelectionCountry={true}>
      <ContainerWithMessage message={'ERROR_PAGE_MESSAGE'} />
    </Layout>
  )
}
export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})
export default Error
