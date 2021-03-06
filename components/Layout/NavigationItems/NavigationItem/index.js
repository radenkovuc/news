import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  border-right: 1px solid #444;
  justify-content: center;
  background: ${(props) => (props.isActive ? '#777777' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  cursor: pointer;
  flex: auto;

  @media only screen and (min-width: 600px) {
    flex: none;
  }
`
const Text = styled.span`
  padding: 10px;
  font-size: 18px;
  font-family: 'Nunito Sans', sans-serif;
  align-self: center;

  @media only screen and (min-width: 480px) {
    padding: 20px;
    font-size: 20px;
  }
`

type Props = {
  text: String,
  link: String,
  isActive: Boolean
}

const NavigationItem = ({text, link, isActive}: Props) => {
  const {t} = useTranslation()

  return (
    <Item isActive={isActive}>
      <Link href={link}>
        <Text>{t(text)}</Text>
      </Link>
    </Item>
  )
}

NavigationItem.defaultProps = {
  text: '',
  link: '',
  isActive: false
}

export default NavigationItem
