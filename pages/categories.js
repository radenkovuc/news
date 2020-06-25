import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import {CATEGORIES, COUNTRIES} from '../common/consts.json'
import {getTopNews} from '../service/NewsService'
import withContext from '../components/HOCs/withContext'
import withTranslation from '../components/HOCs/withTranslation'
import Category from '../components/Category'

const Title = styled.div`
  display: flex;
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`
const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  border: 1px solid #444;
  border-radius: 10px;
`

const MAX_ARTICLES_PER_CATEGORY = 5

const Index = (props) => {
  const [articles, setArticles] = useState({})

  const {
    t,
    appContext: {selectedCountry}
  } = props

  useEffect(() => {
    loadNews()
  }, [selectedCountry])

  const loadNews = () => {
    try {
      const news = {}
      CATEGORIES.forEach((category) => {
        getTopNews(COUNTRIES[selectedCountry], category.value, MAX_ARTICLES_PER_CATEGORY).then(
          (res) => {
            setArticles((prevState) => {
              return {...prevState, [category.value]: res.articles}
            })
          }
        )
      })
      setArticles(news)
    } catch (e) {
      setArticles([])
    }
  }

  const renderCategories = () => {
    return (
      <CategoriesContainer>
        {CATEGORIES.map(({name, value}) => {
          return <Category key={value} name={t(name)} articles={articles[value]} />
        })}
      </CategoriesContainer>
    )
  }

  return (
    <Layout>
      <Title>
        {t('CATEGORIES_PAGE_TITLE', {country: t(COUNTRIES[selectedCountry].langKeyLong)})}
      </Title>
      {renderCategories()}
    </Layout>
  )
}

export default withContext(withTranslation(Index))
