import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddNote from './AddNote'
import NotesList from '../components/Notes/NotesList'

export default function Home() {
  return (
    <>
      <NotesList />
    </>
  )
}
