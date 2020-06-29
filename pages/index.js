import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import withTranslation from '../components/HOCs/withTranslation'
import Layout from '../components/Layout'
import {getTopNews} from '../service/NewsService'
import withContext from '../components/HOCs/withContext'
import Articles from '../components/Articles'
import {COUNTRIES} from '../common/consts.json'

const Title = styled.div`
  display: flex;
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

type Props = {
  appContext: Object,
  t: Function
}

const Index = (props: Props) => {
  const [articles, setArticles] = useState([])

  const {
    t,
    appContext: {selectedCountry}
  } = props

  useEffect(() => {
    loadNews()
  }, [selectedCountry])

  const loadNews = async () => {
    try {
      const response = await getTopNews(selectedCountry)
      setArticles(response.articles)
    } catch (e) {
      setArticles([])
    }
  }

  return (
    <Layout>
      <Title>
        {t('TOP_NEWS_PAGE_TITLE', {country: t(COUNTRIES[selectedCountry].langKeyLong)})}
      </Title>
      <Articles articles={articles} />
    </Layout>
  )
}

Index.defaultProps = {
  t: (t) => t
}

export default withContext(withTranslation(Index))
