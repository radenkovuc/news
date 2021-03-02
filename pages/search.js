import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

import {getTopNews} from '../service/NewsService'

import {COUNTRIES} from '../common/consts.json'

import Layout from '../components/Layout'
import Articles from '../components/Articles'

import {SelectedCountryContext} from './_app'

const SearchInput = styled.input`
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
  padding: 5px 20px 5px;
`

const SearchPage = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('')
  const [selectedCountry] = useContext(SelectedCountryContext)
  const {t} = useTranslation()

  useEffect(() => {
    loadNews()
  }, [selectedCountry, term])

  const loadNews = async () => {
    const articles = await getTopNews({country: selectedCountry, term})
    setArticles(articles)
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

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default SearchPage
