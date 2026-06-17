import React from 'react'
import { NotesMenuData } from './menu.data'
import { StarIcon } from 'lucide-react'

export default function NotesMenu() {
  return (
    <div className='xl:w-3/12 lg:w-4/12 xl:h-full lg:h-10/12 xl:overflow-y-hidden lg:overflow-y-auto shadow border gap-1 flex flex-col border-gray-300 rounded-md'>
      {NotesMenuData.map((item)=>(
        <button key={item.id} className="p-4 flex text-start bg-gray-50 items-center justify-between hover:bg-gray-200 focus:text-indigo-600 focus:bg-indigo-300">
          <div className="flex flex-col">
            <h4 className='font-bold xl:text-xl text-sm'>{item.title}</h4>
            <h5 className='lg:text-sm text-xs text-gray-500'>{item.createdAt}</h5>
          </div>
          {item.favourited && <StarIcon fill='orange' color='yellow'  />}
        </button>
      ))}
    </div>
  )
}
