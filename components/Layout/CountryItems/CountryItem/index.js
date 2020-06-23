import styled from 'styled-components'
import React from 'react'
import withTranslation from '../../../HOCs/withTranslation'

const Item = styled.div`
  display: flex;
  border-right: 1px solid #444;
  background: ${(props) => (props.isActive ? '#777777' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  cursor: pointer;
`
const Text = styled.span`
  padding: 20px;
  font-size: 20px;
  font-family: 'Nunito Sans', sans-serif;
`

const CountryItem = (props) => {
  const {text, isActive, onClick, t} = props

  return (
    <Item isActive={isActive} onClick={onClick}>
      <Text>{t(text)}</Text>
    </Item>
  )
}

export default withTranslation(CountryItem)
