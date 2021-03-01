import {appWithTranslation} from 'next-i18next'
import React, {useState} from 'react'

import {SelectedCountryContext, SelectedArticleContext} from '../pages/_app'

const TestAppWrapper = ({children}) => {
  const [selectedCountry, setSelectedCountry] = useState('US')
  const [selectedArticle, setSelectedArticle] = useState()

  return (
    <SelectedCountryContext.Provider value={[selectedCountry, setSelectedCountry]}>
      <SelectedArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
        {children}
      </SelectedArticleContext.Provider>
    </SelectedCountryContext.Provider>
  )
}

export default appWithTranslation(TestAppWrapper)
