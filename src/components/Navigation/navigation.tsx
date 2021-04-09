import React, { Fragment, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Login from 'features/Login'
import Home from 'features/Dashboard'

export const history = createBrowserHistory()

const Navigation = (): React.ReactElement => {
  return (
    <Router history={history}>
      <Suspense fallback={<>Loading....</>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Home} />
          <Route path="*" component={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Navigation
