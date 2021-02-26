import React, {useEffect, useState, useContext} from 'react'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {getTopNews} from '../service/NewsService'

import {COUNTRIES} from '../common/consts.json'

import Layout from '../components/Layout'
import Articles from '../components/Articles'

import {SelectedCountryContext} from './_app'

const Search = () => {
  const [articles, setArticles] = useState([])
  const [selectedCountry] = useContext(SelectedCountryContext)
  const {t} = useTranslation()

  useEffect(() => {
    loadNews()
  }, [selectedCountry])

  const loadNews = async () => {
    try {
      const response = await getTopNews({country: selectedCountry})
      setArticles(response.articles)
    } catch (e) {
      setArticles([])
    }
  }

  return (
    <Layout title={t('TOP_NEWS_PAGE_TITLE', {country: t(COUNTRIES[selectedCountry].langKeyLong)})}>
      <Articles articles={articles} />
    </Layout>
  )
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Search
