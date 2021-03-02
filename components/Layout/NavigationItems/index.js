import styled from 'styled-components'
import React from 'react'
import {withRouter} from 'next/router'

import NavigationItem from './NavigationItem'

import {HEADER_MENU_ITEMS as headerRoutes} from '../../../common/consts.json'

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #444;
  flex: 1;
  width: 100%;
  align-self: center;
  margin: 0;

  @media only screen and (min-width: 600px) {
    width: auto;
  }
`

type Props = {
  router: Object
}

const NavigationItems = ({router}: Props) => {
  const navItems = []

  for (let route in headerRoutes) {
    // eslint-disable-next-line no-prototype-builtins
    if (headerRoutes.hasOwnProperty(route)) {
      navItems.push(
        <NavigationItem
          key={headerRoutes[route].link}
          link={headerRoutes[route].link}
          text={headerRoutes[route].text}
          isActive={router && router.route === headerRoutes[route].link}
        />
      )
    }
  }

  return <Wrapper>{navItems}</Wrapper>
}

export default withRouter(NavigationItems)
