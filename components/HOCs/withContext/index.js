/**
 * withTranslation
 * Higher-order component that wraps child component and enables CPAppContext to be used as props.
 * @flow
 */

import AppContext from '../../context/AppContext'
import React, {Component} from 'react'

const withContext = (ComponentToExtend) => {
  return class WrapperComponent extends Component {
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
