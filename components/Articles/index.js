import ArticleCard from '../ArticleCard'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

type Props = {
  articles: Array
}

const Articles = ({articles}: Props) => (
  <Container>
    {articles.map((article, index) => {
      return <ArticleCard key={index} article={article} useMobileStyle />
    })}
  </Container>
)

Articles.defaultProps = {
  articles: []
}

export default Articles
