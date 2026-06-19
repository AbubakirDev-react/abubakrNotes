import { NotebookPenIcon, Star, Trash2Icon } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='h-full w-full flex items-center gap-2 justify-between bg-gray-400 p-3 border border-gray-100'>
        <a href="" className='text-2xl'>Notes</a>
      <ul className='flex gap-2'>
        <li>
            <a href="#" className='bg-indigo-500 flex items-center opacity-70 px-4 py-2 rounded hover:opacity-100 duration-300 ease-in'><NotebookPenIcon/> All Notes</a>
        </li>
        <li>
            <a href="#" className='bg-amber-400 flex items-center opacity-70 px-4 py-2 rounded hover:opacity-100 duration-300 ease-in'><Star/> Favourited</a>
        </li>
        <li>
            <a href="#" className='bg-red-500 flex items-center opacity-70 px-4 py-2 rounded hover:opacity-100 duration-300 ease-in'><Trash2Icon/> Trash</a>
        </li>
      </ul>
    </nav>
  )
}
