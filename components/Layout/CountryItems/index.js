import styled from 'styled-components'
import React from 'react'
import CountryItem from './CountryItem'
import AppContext from '../../context/AppContext'

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 0;
`

const CountryItems = () => {
  const items = ['GB', 'US']

  return (
    <AppContext.AppConsumer>
      {(AppContext) => {
        return (
          <Wrapper>
            {items.map((item) => {
              return (
                <CountryItem
                  key={item}
                  text={item}
                  isActive={AppContext.selectedCountry === item}
                  onClick={() => AppContext.setContextData({selectedCountry: item})}
                />
              )
            })}
          </Wrapper>
        )
      }}
    </AppContext.AppConsumer>
  )
}

export default CountryItems
