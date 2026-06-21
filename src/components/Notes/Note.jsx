import React from 'react'
import { useNote } from '../../context/NoteContext'

export default function Note() {
    const {activeNote} = useNote();
  return (
    <div className='w-full h-screen p-3'>
      <h1 className='text-3xl'>{activeNote.title}</h1>
        <h3 className='text-xl'>{activeNote.folder}</h3>
        <p>{activeNote.content}</p>
    </div>
  )
}
