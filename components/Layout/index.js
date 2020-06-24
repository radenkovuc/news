import styled from 'styled-components'
import React from 'react'
import NavigationItems from './NavigationItems'
import CountryItems from './CountryItems'

const Container = styled.div`
  margin: 10px;
  border: 1px solid #444;
  min-height: 500px;
`
const MenuContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #444;
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
