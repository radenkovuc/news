import styled from 'styled-components'
import React from 'react'

import Link from 'next/link'
import {ARTICLE} from '../../common/consts.json'
import {useTranslation} from 'next-i18next'

const Container = styled.div`
  width: ${(props) => (props.useMobileStyle ? '100%' : '300px;')};
  border: 1px solid #444;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  text-align: left;
  font-family: 'Nunito Sans black', sans-serif;
  font-size: 18px;
  line-height: 24px;
  overflow: hidden;
  margin-bottom: 15px;
  min-height: 48px;
`

const Image = styled.div`
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url('${props.url}')`};
`

const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  text-align: left;
  font-family: 'Nunito Sans black', sans-serif;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  margin-top: 15px;
  min-height: 50px;
`

const More = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  cursor: pointer;
`
const MoreText = styled.div`
  font-family: 'Nunito Sans black', sans-serif;
  font-size: 16px;
  padding-right: 5px;
`
const MoreIcon = styled.div`
  width: 12px;
  height: 18px;
  background: url('/static/images/next.svg') no-repeat center/cover;
`

type Props = {
  article: Object,
  useMobileStyle: Boolean,
  appContext: Object,
  t: Function
}

const ArticleCard = (props: Props) => {
  const {article, useMobileStyle} = props
  const {t} = useTranslation()

  const onClickMore = () => {
    // appContext.setContextData({selectedArticle: article})
  }

  return (
    <Container useMobileStyle={useMobileStyle}>
      <Title>{article.title}</Title>
      <Image url={article.urlToImage} />
      <Description>{article.description}</Description>
      <Link href={ARTICLE.link}>
        <More onClick={onClickMore}>
          <MoreText>{t('MORE')}</MoreText>
          <MoreIcon />
        </More>
      </Link>
    </Container>
  )
}

ArticleCard.defaultProps = {
  article: {},
  useMobileStyle: false
}

export default ArticleCard
