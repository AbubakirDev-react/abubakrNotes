import React, { useEffect } from 'react'
import { Notes } from './NoteData'
import { useNote } from '../../context/NoteContext'
import { useFolders } from '../../context/FolderContext'
import { Link } from 'react-router-dom'

export default function NotesList() {
  const {notes,setActiveNote} = useNote();
  const { folders,activeFolder } = useFolders()
  let filteredNotes=notes.filter(note=>note.folder===activeFolder)
  if(activeFolder==='All Notes'){
    filteredNotes=notes
  }
  return (
    <div className='w-1/5 flex flex-col gap-4 p-3 h-screen overflow-y-auto border-r border-mist-600'>
        <h1 className='text-center text-2xl'> {activeFolder}</h1>
      <ul className='flex flex-col gap-3'>
        {filteredNotes.map((note)=>(
          <li key={note.id}>
            <Link to='/' onClick={()=>setActiveNote(notes.find(f=>f.id===note.id))} className='flex flex-col rounded-lg border border-mist-700 hover:bg-mist-600 focus:bg-mist-600 px-3 py-1.5'>
              <span className='text-lg uppercase'>{note.title}</span>
              <span className='text-sm lowercase text-white/20'>{note.folder}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
