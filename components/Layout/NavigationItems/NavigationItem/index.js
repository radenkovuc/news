import styled from 'styled-components'
import React from 'react'
import withTranslation from '../../../HOCs/withTranslation'
import {Link} from '../../../../i18n'

const Item = styled.div`
  display: flex;
  border-right: 1px solid #444;
  justify-content: center;
  background: ${(props) => (props.isActive ? '#777777' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  cursor: pointer;
  flex: 1;

  @media only screen and (min-width: 600px) {
    flex: none;
  }
`
const Text = styled.span`
  padding: 20px;
  font-size: 20px;
  font-family: 'Nunito Sans', sans-serif;
`

const NavigationItem = (props) => {
  const {text, link, isActive, t} = props

  return (
    <Item isActive={isActive}>
      <Link href={link}>
        <Text>{t(text)}</Text>
      </Link>
    </Item>
  )
}

export default withTranslation(NavigationItem)
