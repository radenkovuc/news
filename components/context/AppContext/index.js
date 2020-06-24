import React from 'react'

const AppContext = React.createContext({})
const AppProvider = AppContext.Provider
const AppConsumer = AppContext.Consumer

const stateData = {
  selectedCountry: 'US',
  selectedNews: null
}

export default {
  AppContext,
  AppProvider,
  AppConsumer,
  stateData
}