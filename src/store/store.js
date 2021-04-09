import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import config from '../config/AppConfig'
import Reactotron from '../config/ReactotronConfig'
import { rootReducer } from './root-reducer'
import sagas from '../sagas'

function createStore(debug) {
  if (debug) {
    Reactotron.connect()
  }

  const sagaMiddleware = debug
    ? createSagaMiddleware({ sagaMonitor: Reactotron.createSagaMonitor() })
    : createSagaMiddleware({})

  return {
    store: configureStore({
      reducer: rootReducer,
      middleware: [
        sagaMiddleware,
        ...getDefaultMiddleware({
          immutableCheck: debug
        })
      ],
      enhancers: debug ? [Reactotron.createEnhancer()] : []
    }),
    sagaMiddleware
  }
}

const { store, sagaMiddleware } = createStore(config.debug)

sagaMiddleware.run(sagas)

export { store }
