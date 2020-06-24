import styled from 'styled-components'
import React from 'react'
import CountryItem from './CountryItem'
import withContext from '../../HOCs/withContext'

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 0;
`

const CountryItems = (props) => {
  const items = [
    {name: 'GB', value: 'gb'},
    {name: 'US', value: 'us'}
  ]
  const {
    appContext: {selectedCountry, setContextData}
  } = props
  return (
    <Wrapper>
      {items.map(({name, value}) => {
        return (
          <CountryItem
            key={name}
            text={name}
            isActive={selectedCountry === value}
            onClick={() => setContextData({selectedCountry: value})}
          />
        )
      })}
    </Wrapper>
  )
}

export default withContext(CountryItems)
