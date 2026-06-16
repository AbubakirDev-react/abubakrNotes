import React from 'react'
import Sidebar from './components/layouts/sidebar/Sidebar'
import Header from './components/layouts/header/Header'

export default function App() {
  return (
    <div className='App flex h-screen'>
      <Sidebar />
      <div className="main flex flex-col w-full">
        <Header />

      </div>
    </div>
  )
}
