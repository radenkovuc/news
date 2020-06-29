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

const Layout = (props) => {
  const {children, disableSelectionCountry} = props

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
      {children}
    </Container>
  )
}

export default Layout
