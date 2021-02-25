import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import {appWithTranslation} from 'next-i18next'

import {getTopNews} from '../service/NewsService'

import {COUNTRIES} from '../common/consts.json'

import Layout from '../components/Layout'
import withContext from '../components/HOCs/withContext'
import Articles from '../components/Articles'

const SearchInput = styled.input`
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
  padding: 5px 20px 5px;
`

type Props = {
  appContext: Object,
  t: Function
}

const Index = (props: Props) => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('')

  const {
    t,
    appContext: {selectedCountry}
  } = props

  useEffect(() => {
    loadNews()
  }, [selectedCountry, term])

  const loadNews = async () => {
    try {
      const response = await getTopNews({country: selectedCountry, term})
      setArticles(response.articles)
    } catch (e) {
      setArticles([])
    }
  }
  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  return (
    <Layout title={t('SEARCH_PAGE_TITLE', {country: t(COUNTRIES[selectedCountry].langKeyLong)})}>
      <SearchInput value={term} onChange={handleChange} placeholder={t('SEARCH_PLACEHOLDER')} />
      <Articles articles={articles} />
    </Layout>
  )
}

Index.defaultProps = {
  t: (t) => t
}

export default withContext(appWithTranslation(Index))
