import React from 'react'
import Dashboard from './components/dashboard/Dashboard'

// redux
import { Provider } from 'react-redux'
import store from './store'

import './assets/styles/tailwind.css';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Dashboard/>
      </>
    </Provider>
  )
}

export default App