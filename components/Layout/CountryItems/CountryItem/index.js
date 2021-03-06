import styled from 'styled-components'
import React from 'react'
import {useTranslation} from 'next-i18next'

const Item = styled.div`
  display: flex;
  border-left: 1px solid #444;
  justify-content: center;
  background: ${(props) => (props.isDisabled ? '#FF6347' : props.isActive ? '#777777' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  flex: auto;

  @media only screen and (min-width: 600px) {
    flex: none;
  }
`
const Text = styled.span`
  padding: 10px;
  font-size: 18px;
  font-family: 'Nunito Sans', sans-serif;

  @media only screen and (min-width: 480px) {
    padding: 20px;
    font-size: 20px;
  }
`

type Props = {
  text: String,
  isActive: Boolean,
  isDisabled: Boolean,
  onClick: Boolean
}

const CountryItem = ({text, isActive, isDisabled, onClick}: Props) => {
  const {t} = useTranslation()

  return (
    <Item isActive={isActive} isDisabled={isDisabled} onClick={onClick}>
      <Text>{t(text)}</Text>
    </Item>
  )
}

CountryItem.defaultProps = {
  text: '',
  expanded: false,
  isDisabled: false,
  isActive: false,
  onClick: () => {}
}

export default CountryItem
