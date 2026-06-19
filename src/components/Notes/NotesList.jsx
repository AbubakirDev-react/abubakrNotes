import React from 'react'
import { Notes } from './NoteData'
import NoteCard from './NoteCard'
import AddNote from './add/AddNote'

export default function NotesList() {
  return (
    <div className='flex items-center flex-col justify-center gap-4 p-3'>
      <h1>Notes</h1>

      <div className="flex items-center gap-2">
        <AddNote />
        {Notes.map((note)=>(
        <NoteCard note={note} />
      ))}
      </div>
    </div>
  )
}
