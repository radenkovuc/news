import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import {appWithTranslation} from 'next-i18next'

import {CATEGORIES, COUNTRIES} from '../../common/consts.json'

import {getTopNews} from '../../service/NewsService'

import Layout from '../../components/Layout'
import Articles from '../../components/Articles'
import ContainerWithMessage from '../../components/ContainerWithMessage'
import withContext from '../../components/HOCs/withContext'

const Title = styled.div`
  display: flex;
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

const CategoryPage = (props) => {
  const [articles, setArticles] = useState([])

  const {
    t,
    category,
    appContext: {selectedCountry}
  } = props

  const renderContent = () => {
    return (
      <>
        <Title>
          {t('CATEGORY_PAGE_TITLE', {
            country: t(COUNTRIES[selectedCountry].langKeyLong),
            category: t(category.name)
          })}
        </Title>
        <Articles articles={articles} />
      </>
    )
  }

  useEffect(() => {
    if (category) {
      loadNews()
    }
  }, [selectedCountry, category])

  const loadNews = async () => {
    try {
      const response = await getTopNews({country: selectedCountry, category: category.value})
      setArticles(response.articles)
    } catch (e) {
      setArticles([])
    }
  }

  return (
    <Layout>
      {category ? renderContent() : <ContainerWithMessage message={'CATEGORY_NOT_FOUND'} />}
    </Layout>
  )
}

CategoryPage.getInitialProps = (ctx) => {
  const {name} = ctx.query
  const category = CATEGORIES.find((category) => category.value === name)
  return {category}
}

export default withContext(appWithTranslation(CategoryPage))
