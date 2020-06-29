/**
 * withTranslation
 * Higher-order component that wraps child component and enables next-i18next features to be used.
 */

import i18n from '../../../i18n'

const WithTranslation = (Component, namespaces = ['common']) => {
  return i18n.withTranslation(namespaces)(Component)
}

export default WithTranslation
