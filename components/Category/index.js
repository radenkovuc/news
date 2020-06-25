import ScrollMenu from 'react-horizontal-scrolling-menu'
import ArticleCard from '../ArticleCard'
import React from 'react'
import styled from 'styled-components'

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
`

const CategoryName = styled.div`
  display: flex;
  margin: 15px;
  font-size: 18px;
  font-family: 'Nunito Sans black', sans-serif;
`

const Category = ({name, articles}) => {
  const Arrow = ({text}) => {
    return <div>{text}</div>
  }

  const ArrowLeft = Arrow({text: '<'})
  const ArrowRight = Arrow({text: '>'})

  const renderItems = (articles) => {
    return (
      articles &&
      articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />
      })
    )
  }
  return (
    <CategoryContainer>
      <CategoryName>{name}</CategoryName>
      <ScrollMenu
        data={renderItems(articles)}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        wheel={false}
        alignCenter={false}
      />
    </CategoryContainer>
  )
}

export default Category
