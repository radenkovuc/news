import styled from 'styled-components'
import React from 'react'
import withTranslation from '../../../HOCs/withTranslation'

const Item = styled.div`
  display: flex;
  border-left: 1px solid #444;
  justify-content: center;
  background: ${(props) => (props.isDisabled ? '#FF6347' : props.isActive ? '#777777' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
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

type Props = {
  text: String,
  isActive: Boolean,
  isDisabled: Boolean,
  onClick: Boolean,
  t: Function
}

const CountryItem = (props: Props) => {
  const {text, isActive, isDisabled, onClick, t} = props

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
  onClick: () => {},
  t: (t) => t
}

export default withTranslation(CountryItem)
