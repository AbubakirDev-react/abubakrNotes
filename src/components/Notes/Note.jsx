import React, { useEffect } from 'react'
import { useNote } from '../../context/NoteContext'
import { Link } from 'react-router-dom';
import Dropdown from './header_dropdown';

export default function Note() {
    const {activeNote,notes} = useNote();
    if(notes.length<=0){
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className='text-3xl'>No notes yet!</h1>
          <Link to='addnote/' className='border border-blue-600 text-blue-600 duration-300 hover:bg-blue-600 hover:text-white/90 rounded-lg p-3 mt-2'>Create first Note</Link>
        </div>
      )
    }
    useEffect(()=>{
      console.log(activeNote)
    },[activeNote])
  return (
    <div className='w-full flex gap-3 items-start justify-center flex-col h-screen p-3'>
      <div className="flex w-full gap-3 items-center justify-between">
        <h1 className='text-3xl'>{activeNote.title}</h1>
          <Dropdown note={activeNote}/>
      </div>
      <p className='w-full h-screen border rounded-lg p-3 wrap-break-word whitespace-pre-wrap max-w-full'>{activeNote.data}</p>
    </div>
  )
}
