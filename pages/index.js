import React, {useEffect, useState} from 'react'
import {useTranslation} from 'next-i18next'

import {getTopNews} from '../service/NewsService'

import {COUNTRIES} from '../common/consts.json'

import Layout from '../components/Layout'
import withContext from '../components/HOCs/withContext'
import Articles from '../components/Articles'

const Index = ({appContext}) => {
  const [articles, setArticles] = useState([])
  const {t} = useTranslation('common')
  const {selectedCountry} = appContext

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

export default withContext(Index)
