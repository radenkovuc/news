import styled from 'styled-components'
import React from 'react'
import withTranslation from '../HOCs/withTranslation'
import withContext from '../HOCs/withContext'
import {Link} from '../../i18n'
import {ARTICLE} from '../routes.json'

const Container = styled.div`
  width: 100%;
  border: 1px solid #444;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;

  @media only screen and (min-width: 762px) {
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
  overflow: hidden;
  margin-bottom: 15px;
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
  overflow: hidden;
  margin-top: 15px;
`

const More = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  cursor: pointer;
`
const MoreText = styled.div`
  font-family: 'Nunito Sans black', sans-serif;
  font-size: 18px;
  padding-right: 5px;
`
const MoreIcon = styled.div`
  width: 12px;
  height: 18px;
  background: url('/static/images/next.svg') no-repeat center/cover;
`

const ArticleCard = (props) => {
  const {article, appContext, t} = props

  const onClickMore = () => {
    appContext.setContextData({selectedArticle: article})
  }

  return (
    <Container>
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

export default withContext(withTranslation(ArticleCard))
