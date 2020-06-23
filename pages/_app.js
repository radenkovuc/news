import React from 'react'
import App from 'next/app'
import {appWithTranslation} from '../i18n'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        namespacesRequired: ['common']
      }
    }
  }

  render() {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}

export default appWithTranslation(MyApp)
