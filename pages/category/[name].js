import styled from 'styled-components'
import React from 'react'
import withTranslation from '../../components/HOCs/withTranslation'
import Layout from '../../components/Layout'

const Title = styled.div`
  color: black;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Nunito Sans black', sans-serif;
  text-align: center;
  align-content: center;
`

const CategoryPage = ({t}) => {
  return (
    <Layout>
      <Title>{t('CATEGORIES')}</Title>
    </Layout>
  )
}

export default withTranslation(CategoryPage)
