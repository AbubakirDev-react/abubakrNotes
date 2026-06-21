import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NotesList from './components/Notes/NotesList'
import NoteProvider from './context/NoteContext'
import Sidebar from './components/sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import FolderProvider from './context/FolderContext'
import EditNote from './pages/EditNote'

function App() {

  return (
    <FolderProvider>
    <NoteProvider>
      <div className="app flex bg-mist-800 text-white/90">
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
            <Route path='addnote/' element={<AddNote />} />
            <Route path='edit/:id' element={<EditNote />} />
        </Routes>
      </div>
    </NoteProvider>
    </FolderProvider>
  )
}

export default App
