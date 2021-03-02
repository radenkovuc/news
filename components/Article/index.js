import styled from 'styled-components'
import React from 'react'
import Router from 'next/router'
import {useTranslation} from 'next-i18next'

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
const Back = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  cursor: pointer;
`
const BackText = styled.div`
  font-family: 'Nunito Sans black', sans-serif;
  font-size: 22px;
  padding-left: 5px;
`
const BackIcon = styled.div`
  width: 18px;
  height: 24px;
  background: url('/static/images/prev.svg') no-repeat center/cover;
`

type Props = {
  article: Object
}

const Article = ({article}: Props) => {
  const {t} = useTranslation()

  return (
    <ContentContainer>
      <Title>{article.title}</Title>
      <Image src={article.urlToImage} />
      <Content>{article.content}</Content>
      <Back onClick={() => Router.back()}>
        <BackIcon />
        <BackText>{t('BACK_TO_LIST')}</BackText>
      </Back>
    </ContentContainer>
  )
}

Article.defaultProps = {
  article: {}
}

export default Article
