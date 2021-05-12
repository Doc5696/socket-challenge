import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/container';
import { Provider } from 'react-redux'
import store from './store/CreateStore'

// const initStore = store()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'),
)
