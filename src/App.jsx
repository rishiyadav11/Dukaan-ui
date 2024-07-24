import React from 'react'
import Sidenav from './components/Sidenav'
import Overview from './components/Overview'
import Topmenu from './components/Topmenu'
const App = () => {
  return (
    <div className='relative min-h-screen w-full bg-white'>
      <Sidenav/>
      <div className="ml-[14vw] w-[calc(100vw-14vw)]">
        <Topmenu/>
      <Overview/>
      </div>
    </div>
  )
}

export default App