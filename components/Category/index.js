import ScrollMenu from 'react-horizontal-scrolling-menu'
import ArticleCard from '../ArticleCard'
import React from 'react'
import styled from 'styled-components'
import {Link} from '../../next-i18next.config'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
`

const TitleContainer = styled.div`
  margin: 15px 15px 15px 50px;
  display: flex;
  cursor: pointer;
`

const Title = styled.div`
  display: flex;
  margin-right: 15px;
  font-size: 18px;
  font-family: 'Nunito Sans black', sans-serif;
  cursor: pointer;
  text-decoration: underline;
`

const ShowHideIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url('/static/images/${(props) => (props.expanded ? 'collapse' : 'expand')}.svg')
    no-repeat center/cover;
  cursor: pointer;
`

const ArrowIcon = styled.div`
  width: 18px;
  height: 30px;
  cursor: pointer;
`

const LeftArrow = styled(ArrowIcon)`
  margin-right: 5px;
  background: url('/static/images/prev.svg') no-repeat center/cover;
`

const RightArrow = styled(ArrowIcon)`
  margin-left: 5px;
  background: url('/static/images/next.svg') no-repeat center/cover;
`

type Props = {
  title: String,
  expanded: Boolean,
  link: String,
  onExpandCollapseCategory: Boolean,
  articles: Array
}

const Category = (props: Props) => {
  const {title, expanded, link, onExpandCollapseCategory, articles} = props

  const renderItems = (articles) => {
    return (
      articles &&
      articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />
      })
    )
  }

  return (
    <Container>
      <TitleContainer>
        <Link href={link}>
          <Title>{title}</Title>
        </Link>
        <ShowHideIcon onClick={onExpandCollapseCategory} expanded={expanded} />
      </TitleContainer>
      {expanded && (
        <ScrollMenu
          data={renderItems(articles)}
          arrowLeft={<LeftArrow />}
          arrowRight={<RightArrow />}
          wheel={false}
          alignCenter={false}
        />
      )}
    </Container>
  )
}

Category.defaultProps = {
  title: '',
  expanded: false,
  link: '',
  onExpandCollapseCategory: () => {},
  articles: []
}

export default Category
