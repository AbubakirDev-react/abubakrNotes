import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddNote from './AddNote'

export default function Home() {
  return (
    <div className=''>
        <Routes>
            <Route path='addnote/' element={<AddNote />} />
        </Routes>
    </div>
  )
}
