import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddNote from './AddNote'
import NotesList from '../components/Notes/NotesList'
import Note from '../components/Notes/Note'

export default function Home() {
  return (
    <>
      <NotesList />
      <Note />
    </>
  )
}
