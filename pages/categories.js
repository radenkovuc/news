import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import {appWithTranslation, useTranslation} from 'next-i18next'

import {getTopNews} from '../service/NewsService'

import {CATEGORIES, CATEGORY, COUNTRIES} from '../common/consts.json'

import Layout from '../components/Layout'
import withContext from '../components/HOCs/withContext'
import Category from '../components/Category'

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  border: 1px solid #444;
  border-radius: 10px;
`

const MAX_ARTICLES_PER_CATEGORY = 5

type Props = {
  appContext: Object
}

const CategoriesPage = (props: Props) => {
  const [articles, setArticles] = useState({})
  const {t} = useTranslation()
  const {
    appContext: {selectedCountry}
  } = props

  useEffect(() => {
    loadNews()
  }, [selectedCountry])

  const loadNews = () => {
    try {
      CATEGORIES.forEach((category) => {
        getTopNews({
          country: COUNTRIES[selectedCountry].value,
          category: category.value,
          pageSize: MAX_ARTICLES_PER_CATEGORY
        }).then((res) => {
          setArticles((prevState) => {
            return {...prevState, [category.value]: {news: res.articles, expanded: false}}
          })
        })
      })
    } catch (e) {
      setArticles([])
    }
  }

  const renderCategories = () => {
    const onExpandCollapseCategory = (key) => {
      if (articles[key]) {
        setArticles((prevState) => {
          return {...prevState, [key]: {...prevState[key], expanded: !prevState[key].expanded}}
        })
      }
    }

    return (
      <CategoriesContainer>
        {CATEGORIES.map(({name, value}) => {
          const {news, expanded} = articles[value] || {}
          const categoryUrl = CATEGORY.link + '/' + value
          return (
            <Category
              key={value}
              link={categoryUrl}
              title={t(name)}
              expanded={expanded}
              articles={news}
              onExpandCollapseCategory={() => onExpandCollapseCategory(value)}
            />
          )
        })}
      </CategoriesContainer>
    )
  }

  return (
    <Layout
      title={t('CATEGORIES_PAGE_TITLE', {country: t(COUNTRIES[selectedCountry].langKeyLong)})}
    >
      {renderCategories()}
    </Layout>
  )
}

export default withContext(appWithTranslation(CategoriesPage))
