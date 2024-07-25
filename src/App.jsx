import React from 'react'
import Sidenav from './components/Sidenav'
import Overview from './components/Overview'
import Topmenu from './components/Topmenu'
import Tableupper from './components/Tableupper'
import Table from './components/Table'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden w-full bg-[#FAFAFA]'>
      <Sidenav/>
      <div className="sm:ml-[14rem] w-full sm:w-[calc(100vw-14rem)] px-8">
        <Topmenu/>
      <Overview/>
      <Tableupper/>
      <Table/>
      <Footer/>
      </div>
    </div>
  )
}

export default App