import styled from 'styled-components'
import React from 'react'
import CountryItem from './CountryItem'
import withContext from '../../HOCs/withContext'
import {COUNTRIES} from '../../../common/consts.json'

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 0;
`

const CountryItems = (props) => {
  const {
    isDisabled,
    appContext: {selectedCountry, setContextData}
  } = props

  const countries = []

  // eslint-disable-next-line no-unused-vars
  for (let key in COUNTRIES) {
    // eslint-disable-next-line no-prototype-builtins
    if (COUNTRIES.hasOwnProperty(key)) {
      const {langKey} = COUNTRIES[key]
      countries.push(
        <CountryItem
          key={key}
          text={langKey}
          isActive={selectedCountry === key}
          isDisabled={isDisabled}
          onClick={() => !isDisabled && setContextData({selectedCountry: key})}
        />
      )
    }
  }

  return <Wrapper>{countries}</Wrapper>
}

export default withContext(CountryItems)
