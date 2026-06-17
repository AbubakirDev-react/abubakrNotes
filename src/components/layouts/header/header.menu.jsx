import { LayoutGridIcon, ListFilterIcon, MoonStarIcon, Search } from 'lucide-react'
import React from 'react'

export default function HeaderMenu() {
  return (
    <div className='HeaderMenu flex items-center ml-auto'>
      <form action="" className="">
        <div className="div flex items-center gap-2 bg-transparent border border-gray-300 rounded shadow shadow-gray-500">
        <button disabled className="text-gray-500 pl-2 disabled">
          <Search />
        </button>
        <input
          type="text"
          placeholder="Search in notes..."
          className="bg-transparent focus:outline-none p-2"
        />
        <button className='p-2 text-gray-500 hover:text-gray-800'><ListFilterIcon /></button>
        </div>
      </form>
        <button className='mx-2 p-2 text-gray-500 hover:text-gray-900'><MoonStarIcon/></button>
        <button className='p-2 text-gray-500 hover:text-gray-900'><LayoutGridIcon/></button>
      
    </div>
  )
}
