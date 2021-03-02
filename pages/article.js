import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import React, {useContext} from 'react'

import Layout from '../components/Layout'
import Article from '../components/Article'

import ContainerWithMessage from '../components/ContainerWithMessage'

import {SelectedArticleContext} from './_app'

const ArticlePage = () => {
  const [selectedArticle] = useContext(SelectedArticleContext)

  return (
    <Layout disableSelectionCountry={true}>
      {selectedArticle ? (
        <Article article={selectedArticle} />
      ) : (
        <ContainerWithMessage message={'ARTICLE_NOT_FOUND'} />
      )}
    </Layout>
  )
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default ArticlePage
