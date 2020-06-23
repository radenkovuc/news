import React from 'react'
import App from 'next/app'
import {appWithTranslation} from '../i18n'
import AppContext from '../components/context/AppContext'

class MyApp extends App {
  state = {
    appContext: {...AppContext.stateData}
  }

  setContextData = (data) => {
    this.setState({appContext: {...this.state.appContext, ...data}})
  }

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
    return (
      <AppContext.AppProvider
        value={{
          ...this.state.appContext,
          setContextData: this.setContextData
        }}
      >
        <Component {...pageProps} />
      </AppContext.AppProvider>
    )
  }
}

export default appWithTranslation(MyApp)
