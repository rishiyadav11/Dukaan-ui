import React from 'react'
import Sidenav from './components/Sidenav'
import Overview from './components/Overview'
import Topmenu from './components/Topmenu'
const App = () => {
  return (
    <div className='relative min-h-screen w-full bg-[#FAFAFA]'>
      <Sidenav/>
      <div className="ml-[15vw] w-[calc(100vw-15vw)] px-8">
        <Topmenu/>
      <Overview/>
      </div>
    </div>
  )
}

export default App