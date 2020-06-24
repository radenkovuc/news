import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import withTranslation from '../components/HOCs/withTranslation'
import Layout from '../components/Layout'
import {getTopNews} from '../service/NewsService'
import withContext from '../components/HOCs/withContext'
import ArticleCard from '../components/ArticleCard'

const Title = styled.li`
  display: flex;
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
  justify-content: center;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Index = (props) => {
  const [news, setNews] = useState([])

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
      setNews(response.articles)
    } catch (e) {
      setNews([])
    }
  }

  const renderItems = () => {
    return (
      <Items>
        {news.map((article, index) => {
          return <ArticleCard key={index} article={article} />
        })}
      </Items>
    )
  }
  const titleKey = selectedCountry === 'gb' ? 'TOP_NEWS_FROM_GB' : 'TOP_NEWS_FROM_US'
  return (
    <Layout>
      <Title>{t(titleKey)}</Title>
      {renderItems()}
    </Layout>
  )
}

export default withContext(withTranslation(Index))
