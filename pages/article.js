import styled from 'styled-components'
import React from 'react'
import withTranslation from '../components/HOCs/withTranslation'
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

const Index = (props) => {
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

export default withContext(withTranslation(Index))
