import React, {useEffect, useState} from 'react'
import withTranslation from '../components/HOCs/withTranslation'
import Layout from '../components/Layout'
import {getTopNews} from '../service/NewsService'
import withContext from '../components/HOCs/withContext'
import Articles from '../components/Articles'
import {COUNTRIES} from '../common/consts.json'

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

Index.defaultProps = {
  t: (t) => t
}

export default withContext(withTranslation(Index))
