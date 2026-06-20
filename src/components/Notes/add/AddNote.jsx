import { Button } from '@headlessui/react'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog,Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import {Categories} from '../categories'
import { useNote } from '../../../context/NoteContext'

export default function AddNote() {
  const [isOpen,setIsOpen] = useState(false)
  const [title,setTitle] = useState('');
  const [category,setCategory] = useState(null);
  const [noteData,setNoteData] = useState(null);

  const { createNote } = useNote();
  function addNote(e){
    e.preventDefault()
    setIsOpen(false)
    createNote(title,category,noteData)
    console.log({
      'title':title,
      'data':noteData,
      'category':category
    })
  }  
  return (
    <div>
      
    <button onClick={() => setIsOpen(true)}><Plus/> New Note</button>

    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="px-4 flex items-center justify-center">
        <form action="" className='p-5 bg-gray-600 flex flex-col gap-2' onSubmit={addNote}>
          <div className="flex flex-col gap-2 p-3">
            <label htmlFor="title" className='block text-white/50 font-semibold'>Title</label>
            <input type="text" name='title' id='title' onChange={(e)=>setTitle(e.target.value)} placeholder='Enter a title...' className='px-3 py-1.5 text-white/50 rounded border-2' required/>
          </div>
          <div className="flex flex-col gap-2 p-3">
            <label htmlFor="categories" className='block text-white/50 font-semibold'>Categories</label>
            <select name="categories" id="categories" onChange={(e)=>setCategory(e.target.value)} className='text-white/50 px-3 py-1.5 border rounded' required>
              {Categories.map(category=>(
                <option value={category.title} className='capitalize text-gray-600'>{category.title}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 p-3">
            <label htmlFor="data" className='block text-white/50 font-semibold'>Data</label>
            <textarea name="data" id="data" onChange={(e)=>setNoteData(e.target.value)} placeholder='Enter something...' className='text-white/50 px-3 py-1.5 border rounded' required></textarea>
          </div>
          <button className='mx-auto p-2 rounded bg-red-500 text-white/90' onClick={()=>setIsOpen(false)}>Cancel</button>
          <button className='mx-auto p-2 rounded bg-purple-500 text-white/70' type='submit'>Save</button>
        </form>
      </div>
      </Dialog>
    </div>
  )
}
