import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const reactotron = Reactotron.configure({ name: 'TDCX' })
  .use(reactotronRedux())
  .use(sagaPlugin({}))

export default reactotron
