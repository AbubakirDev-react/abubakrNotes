import React, { useEffect } from 'react'
import { Notes } from './NoteData'
import NoteCard from './NoteCard'
import AddNote from './add/AddNote'
import { useNote } from '../../context/NoteContext'
import { useFolders } from '../../context/FolderContext'

export default function NotesList() {
  const {notes} = useNote();
  const {activeFolder} = useFolders()
  let filteredNotes=notes.filter(note=>note.folder===activeFolder)
  if(activeFolder==='All Notes'){
    filteredNotes=notes
  }
  
  return (
    <div className='w-1/5 flex flex-col gap-4 p-3 h-screen overflow-y-auto border-r border-mist-600'>
        <h1 className='text-center text-2xl'>{activeFolder}</h1>
      <ul className='flex flex-col gap-3'>
        {filteredNotes.map((note,index)=>(
          <li key={index} className=''>
            <a href="#" className='flex flex-col rounded-lg border border-mist-700 hover:bg-mist-600 focus:bg-mist-600 px-3 py-1.5'>
              <span className='text-lg uppercase'>{note.title}</span>
              <span className='text-sm lowercase text-white/20'>{note.folder}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
