import styled from 'styled-components'
import React from 'react'
import NavigationItems from './NavigationItems'
import CountryItems from './CountryItems'

const Container = styled.div`
  border: 1px solid #444;
  min-height: 95vh;
  margin: 20px;
  display: flex;
  flex-direction: column;
`
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`
const Title = styled.div`
  display: flex;
  margin: 15px;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

type Props = {
  children: React.Component,
  title: String,
  disableSelectionCountry: Boolean
}

const Layout = (props: Props) => {
  const {children, title, disableSelectionCountry} = props

  const renderMenu = () => {
    return (
      <MenuContainer>
        <NavigationItems />
        <CountryItems isDisabled={disableSelectionCountry} />
      </MenuContainer>
    )
  }

  return (
    <Container>
      {renderMenu()}
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  )
}

Layout.defaultProps = {
  children: null,
  disableSelectionCountry: false
}

export default Layout
