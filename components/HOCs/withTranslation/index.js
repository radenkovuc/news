/**
 * withTranslation
 * Higher-order component that wraps child component and enables next-i18next features to be used.
 */

import {appWithTranslation} from 'next-i18next'
import nextI18NextConfig from '../../../next-i18next.config.js'

const withTranslation = (Component) => {
  return appWithTranslation(Component, nextI18NextConfig)
}

export default withTranslation
