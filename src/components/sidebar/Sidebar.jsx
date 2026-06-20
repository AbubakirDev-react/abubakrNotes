import { FolderPlus, LucideNotepadText, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import { folders } from './folders'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [activeFolder,setActiveFolder] = useState('All Notes');
  return (
    <nav className='w-1/5 h-screen sticky border border-mist-500 flex flex-col'>
      {/* header */}
        <div className="flex flex-col justify-start p-2 gap-2 gap-y-3 border-b border-mist-500 pt-5">
            <Link to='/' className='text-2xl font-bold flex items-center gap-3'>
                <LucideNotepadText fill='indigo' size={30}/>
                <span>Notely</span>
            </Link>
            <input type="text" placeholder='Seach note...' className='px-2 duration-300 py-1.5 border rounded-xl bg-mist-700'/>
        </div>
      {/* body */}
        <div className='flex flex-col flex-1 overflow-y-auto justify-start p-2 px-3 gap-2 gap-y-3'>
            <h3>Folders</h3>
            <ul className='gap-2 flex flex-col'>
                {folders.map((folder,index)=>(
                    <li key={index} className='flex'>
                        <a href="#" className='flex rounded items-center gap-2 w-full h-full duration-300 hover:bg-mist-700 focus:bg-mist-600  px-3 py-1.5 '>
                            {folder.icon}
                            <span>{folder.title}</span>
                            
                            <span className='ml-auto text-sm'>{folder.notes}</span>
                        </a>
                    </li>
                ))}
                <li className='border rounded flex border-mist-500'>
                        <a href="#" className='flex items-center gap-2 w-full h-full duration-300 hover:bg-mist-700 focus:bg-mist-600  px-3 py-1.5 '>
                            <FolderPlus />
                            <span>New Folder</span>
                        </a>
                    </li>
            </ul>            
        </div>

      {/* footer */}
      <div className="border-t border-mist-500 mt-auto">
        <li className='p-4'>
            <Link to='addnote/' className='w-full flex items-center hover:bg-mist-700 focus:bg-mist-600 justify-center border border-mist-500 rounded p-2 text-center'>
                <PlusIcon />
                <span>Add Note</span>
            </Link>
        </li>
      </div>
    </nav>
  )
}
