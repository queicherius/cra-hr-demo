import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {AppContainer} from 'react-hot-loader'
import App from './App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)
registerServiceWorker()

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
