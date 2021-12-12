import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'

// redux
import { Provider } from 'react-redux'
import store from './store'

import './assets/styles/tailwind.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </>
      </Router>
    </Provider>
  )
}

export default App