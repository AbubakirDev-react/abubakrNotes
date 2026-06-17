import React from 'react'
import Sidebar from '../layouts/sidebar/Sidebar'
import Header from '../layouts/header/Header'
import Note from '../layouts/note/Note'

export default function Desktop() {
  return (
    <div>
      <div className='flex h-screen'>
      <Sidebar />
      <div className="main flex flex-col w-full">
        <Header />
        <Note />
      </div>
    </div>
    </div>
  )
}
