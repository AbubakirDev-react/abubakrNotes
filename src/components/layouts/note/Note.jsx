import React from 'react'
import NotesMenu from './notes/NotesMenu'
import NoteEditor from './noteEditor/NoteEditor'

export default function Note() {
  return (
    <div className='w-full flex gap-5 p-5'>
      <NotesMenu />
      <NoteEditor />
    </div>
  )
}
