import styled from 'styled-components'
import React, {useContext, useEffect, useState} from 'react'

import {CATEGORIES, COUNTRIES} from '../../common/consts.json'

import {getTopNews} from '../../service/NewsService'

import Layout from '../../components/Layout'
import Articles from '../../components/Articles'
import ContainerWithMessage from '../../components/ContainerWithMessage'
import {SelectedCountryContext} from '../_app'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

const Title = styled.div`
  display: flex;
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

const CategoryPage = ({category}) => {
  const [articles, setArticles] = useState([])
  const [selectedCountry] = useContext(SelectedCountryContext)
  const {t} = useTranslation()

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

export const getStaticPaths = () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps = async ({params, locale}) => {
  const {name} = params

  const category = CATEGORIES.find((category) => category.value === name)
  return {
    props: {
      category,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default CategoryPage
