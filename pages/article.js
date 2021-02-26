import styled from 'styled-components'
import React, {useContext} from 'react'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import Layout from '../components/Layout'
import Article from '../components/Article'

import {SelectedArticleContext} from './_app'

const NotFoundContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const NotFoundText = styled.div`
  text-align: center;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

const ArticlePage = () => {
  const [selectedArticle] = useContext(SelectedArticleContext)
  const {t} = useTranslation()

  const renderArticleNotFound = () => {
    return (
      <NotFoundContainer>
        <NotFoundText>{t('ARTICLE_NOT_FOUND')}</NotFoundText>
      </NotFoundContainer>
    )
  }

  return (
    <Layout disableSelectionCountry={true}>
      {selectedArticle ? <Article article={selectedArticle} /> : renderArticleNotFound()}
    </Layout>
  )
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer']))
  }
})

export default ArticlePage
