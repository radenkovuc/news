import styled from 'styled-components'
import React from 'react'
import withTranslation from '../components/HOCs/withTranslation'
import Layout from '../components/Layout'
import withContext from '../components/HOCs/withContext'

const ContentContainer = styled.div`
  padding: 10px;

  @media only screen and (min-width: 768px) {
    padding: 30px;
  }
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Nunito Sans black', sans-serif;
  text-align: start;
  padding-bottom: 10px;
`

const Image = styled.img`
  width: 100%;
`

const Content = styled.div`
  font-size: 18px;
  font-family: 'Nunito Sans black', sans-serif;
  text-align: start;
  padding-top: 10px;
`

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

  const renderContent = () => {
    return (
      <ContentContainer>
        <Title>{selectedArticle.title}</Title>
        <Image src={selectedArticle.urlToImage} />
        <Content>{selectedArticle.content}</Content>
      </ContentContainer>
    )
  }

  const renderArticleNotFound = () => {
    return (
      <NotFoundContainer>
        <NotFoundText>{t('ARTICLE_NOT_FOUND')}</NotFoundText>
      </NotFoundContainer>
    )
  }

  return (
    <Layout disableSelectionCountry={true}>
      {selectedArticle ? renderContent() : renderArticleNotFound()}
    </Layout>
  )
}

export default withContext(withTranslation(Index))
