import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

import {getTopNews} from '../service/NewsService'

import {CATEGORIES, CATEGORY, COUNTRIES} from '../common/consts.json'

import Layout from '../components/Layout'
import Category from '../components/Category'

import {SelectedCountryContext} from './_app'

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  border: 1px solid #444;
  border-radius: 10px;
`

const MAX_ARTICLES_PER_CATEGORY = 5

const CategoriesPage = () => {
  const [articles, setArticles] = useState({})
  const [selectedCountry] = useContext(SelectedCountryContext)
  const {t} = useTranslation()

  useEffect(() => {
    loadNews()
  }, [selectedCountry])

  const loadNews = () => {
    CATEGORIES.forEach(async (category) => {
      const articles = await getTopNews({
        country: COUNTRIES[selectedCountry].value,
        category: category.value,
        pageSize: MAX_ARTICLES_PER_CATEGORY
      })
      setArticles((prevState) => ({
        ...prevState,
        [category.value]: {news: articles, expanded: false}
      }))
    })
  }
  const onExpandCollapseCategory = (key) => {
    if (articles[key]) {
      setArticles((prevState) => {
        return {...prevState, [key]: {...prevState[key], expanded: !prevState[key].expanded}}
      })
    }
  }

  return (
    <Layout
      title={t('CATEGORIES_PAGE_TITLE', {country: t(COUNTRIES[selectedCountry].langKeyLong)})}
    >
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
    </Layout>
  )
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default CategoriesPage
