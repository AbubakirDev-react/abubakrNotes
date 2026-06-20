import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import NotesList from './components/Notes/NotesList'
import NoteProvider from './context/NoteContext'

function App() {

  return (
    <NoteProvider>
      <Navbar />
      <NotesList/>
    </NoteProvider>
  )
}

export default App
