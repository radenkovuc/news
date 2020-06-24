import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import withTranslation from '../components/HOCs/withTranslation'
import Layout from '../components/Layout'
import {getTopNews} from '../service/NewsService'
import withContext from '../components/HOCs/withContext'

const Title = styled.div`
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

const Items = styled.div`
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

const Index = (props) => {
  const [news, setNews] = useState([])

  const {
    t,
    appContext: {selectedCountry}
  } = props

  useEffect(() => {
    loadNews()
  }, [selectedCountry])

  const loadNews = async () => {
    try {
      const response = await getTopNews(selectedCountry)
      console.info('response', response)
      setNews(response.articles)
      console.info('news', news)
    } catch (e) {
      console.err('Error', e)
    }
  }

  return (
    <Layout>
      <Title>{t('HOME')}</Title>
      <Items>

      </Items>
    </Layout>
  )
}

export default withContext(withTranslation(Index))
