import styled from 'styled-components'
import React from 'react'
import {appWithTranslation} from 'next-i18next'

import Layout from '../components/Layout'
import withContext from '../components/HOCs/withContext'
import Article from '../components/Article'

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

type Props = {
  appContext: Object,
  t: Function
}

const ArticlePage = (props: Props) => {
  const {
    t,
    appContext: {selectedArticle}
  } = props

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

Article.defaultProps = {
  t: (t) => t
}

export default withContext(appWithTranslation(ArticlePage))
