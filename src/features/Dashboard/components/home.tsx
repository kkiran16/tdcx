import React from 'react'

import { EmptyTask } from 'components/Task'

function Home(): React.ReactElement {
  return (
    <div>
      <EmptyTask />
      {/* <NewTask /> */}
    </div>
  )
}

export default Home
