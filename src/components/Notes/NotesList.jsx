import React from 'react'
import { Notes } from './NoteData'
import NoteCard from './NoteCard'
import AddNote from './add/AddNote'
import { useNote } from '../../context/NoteContext'

export default function NotesList() {
  const {notes} = useNote();
  return (
    <div className='flex items-center flex-col justify-center gap-4 p-3'>
      <h1>Notes</h1>

      <div className="flex items-center gap-2">
        <AddNote />
        {notes.map((note,index)=>(
        <NoteCard note={note}  key={index}/>
      ))}
      </div>
    </div>
  )
}
