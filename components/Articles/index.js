import ArticleCard from '../ArticleCard'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Articles = ({articles}) => {
  return (
    <Container>
      {articles.map((article, index) => {
        return <ArticleCard key={index} article={article} useMobileStyle />
      })}
    </Container>
  )
}

export default Articles
