import React, { useState } from 'react'
import { useFolders } from '../context/FolderContext'
import { Folder } from 'lucide-react';
import { useNote } from '../context/NoteContext';

export default function AddNote() {
    const {folders} = useFolders();
    const [title,setTitle] = useState("")
    const [folder,setFolder] = useState("Favourited")
    const [content,setContent] = useState("")
    const {createNote} = useNote();

    const addNote = (e) => {
        e.preventDefault()
        createNote(title,folder,content)
        setTitle('')
        setFolder(null)
        setContent('')
    }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="w-5/12 p-5 bg-mist-700 rounded-xl">
        <form action="" className=' flex flex-col gap-4' onSubmit={addNote}>
            <div className="flex gap-2 items-center">
                <label htmlFor="note_title" className='text-xl'>Title</label>
                <input required type="text" value={title} name='note_title' onChange={(e)=>setTitle(e.target.value)} id='note_title' placeholder='Note Title...' className='rounded w-full border border-mist-600 px-3 py-1.5 focus:ring-1 focus:ring-mist-900' />
            </div>
            <div className="flex gap-2 items-center">
                <label htmlFor="folder" className='text-xl'><Folder /></label>
                <select required name="folder" id="folder" value={folder} onChange={(e)=>setFolder(e.target.value)} className='px-3 py-1.5'>
                    {folders.map((folder,index)=>(
                        <option value={folder.title} key={index} className='bg-amber-50 text-mist-700'><span>{folder.title}</span></option>
                    ))}
                </select>   
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="note_content" className='text-xl'>Content</label>
                <textarea required type="text" name='note_content' value={content} onChange={(e)=>setContent(e.target.value)} id='note_title' placeholder='Type Something...' className='rounded w-full border border-mist-600 px-3 py-1.5 focus:ring-1 focus:ring-mist-900 flex-1' rows={10}></textarea>
            </div>
            <button className='p-2 bg-indigo-500 rounded' type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}
