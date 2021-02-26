import styled from 'styled-components'
import React, {useContext} from 'react'

import CountryItem from './CountryItem'

import {COUNTRIES} from '../../../common/consts.json'

import {SelectedCountryContext} from '../../../pages/_app'

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 0;
  width: 100%;
  border-bottom: 1px solid #444;

  @media only screen and (min-width: 600px) {
    width: auto;
  }
`

type Props = {
  isDisabled: Boolean,
  appContext: Object
}

const CountryItems = ({isDisabled}: Props) => {
  const [selectedCountry, setSelectedCountry] = useContext(SelectedCountryContext)
  const countries = []

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
          onClick={() => !isDisabled && setSelectedCountry(key)}
        />
      )
    }
  }

  return <Wrapper>{countries}</Wrapper>
}

CountryItem.defaultProps = {
  isDisabled: false
}

export default CountryItems
