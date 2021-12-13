import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Routes from './components/routing/Routes'

// redux
import { Provider } from 'react-redux'
import store from './store'

import './assets/styles/tailwind.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Sidebar>
            <Switch>
              <Route component={Routes}/>
            </Switch>
          </Sidebar>
        </>
      </Router>
    </Provider>
  )
}

export default App