import styled from 'styled-components'
import React, {useContext, useEffect, useState} from 'react'
import {useTranslation} from 'next-i18next'

import {getTopNews} from '../service/NewsService'

import {CATEGORIES, CATEGORY, COUNTRIES} from '../common/consts.json'

import Layout from '../components/Layout'
import Category from '../components/Category'
import {SelectedCountryContext} from './_app'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

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

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer']))
  }
})

export default CategoriesPage
