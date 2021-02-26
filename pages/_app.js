import React, {useState, createContext} from 'react'
import {appWithTranslation} from 'next-i18next'

export const SelectedCountryContext = createContext()
export const SelectedArticleContext = createContext()

const MyApp = ({Component, pageProps}) => {
  const [selectedCountry, setSelectedCountry] = useState('US')
  const [selectedArticle, setSelectedArticle] = useState()

  return (
    <SelectedCountryContext.Provider value={[selectedCountry, setSelectedCountry]}>
      <SelectedArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
        <Component {...pageProps} />
      </SelectedArticleContext.Provider>
    </SelectedCountryContext.Provider>
  )
}

export default appWithTranslation(MyApp)
