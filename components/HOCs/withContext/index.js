/**
 * withTranslation
 * Higher-order component that wraps child component and enables CPAppContext to be used as props.
 */

import AppContext from '../../context/AppContext'
import React, {Component} from 'react'

const withContext = (ComponentToExtend) => {
  return class WrapperComponent extends Component {
    static async getInitialProps(ctx) {
      // Get component’s props
      let componentProps = {}
      if (ComponentToExtend.getInitialProps) {
        componentProps = await ComponentToExtend.getInitialProps(ctx)
      }

      return {
        ...componentProps
      }
    }

    render() {
      return (
        <AppContext.AppConsumer>
          {(appContext) => <ComponentToExtend {...this.props} appContext={appContext} />}
        </AppContext.AppConsumer>
      )
    }
  }
}

export default withContext
