import {HEADER_MENU_ITEMS as headerRoutes} from '../../../common/consts.json'
import styled from 'styled-components'
import React from 'react'
import NavigationItem from './NavigationItem'
import {withRouter} from 'next/router'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  margin: 0;
`

const NavigationItems = (props) => {
  const navItems = []

  // eslint-disable-next-line no-unused-vars
  for (let route in headerRoutes) {
    // eslint-disable-next-line no-prototype-builtins
    if (headerRoutes.hasOwnProperty(route)) {
      navItems.push(
        <NavigationItem
          key={headerRoutes[route].link}
          link={headerRoutes[route].link}
          text={headerRoutes[route].text}
          isActive={props.router && props.router.route === headerRoutes[route].link}
        />
      )
    }
  }

  return <Wrapper>{navItems}</Wrapper>
}

export default withRouter(NavigationItems)
