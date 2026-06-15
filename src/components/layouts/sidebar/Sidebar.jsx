import { NotebookText,Search,SidebarCloseIcon } from 'lucide-react'
import React from 'react'
import sidebarHeaderData from './sidebar.data'
import sidebarCategoriesData from './sidebar.categories.data'


export default function Sidebar() {
  return (
    <div className='sidebar w-1/5 h-screen bg-gray-100 p-4'>
      <div className="header p-4">
        <div className="header flex items-center justify-between">
            <h1 className='text-2xl font-bold flex items-center gap-2'><NotebookText className="text-purple-900" /><span> Notes</span></h1>
        <button className="p-2 hover:bg-gray-200 rounded">
          <SidebarCloseIcon />
        </button>
        </div>
        
            
            <input id="price" type="text" name="price" placeholder='Search notes...' className="w-full mt-4 shadow shadow-mist-500 border-gray-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        
      </div>
      <div className="body p-4">
        <div className="header-menu">
            {sidebarHeaderData.map((item) => (
          <a key={item.id} href={item.href} className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded">
            {item.icon}
            <span>{item.title}</span>
            <span className='ml-auto text-gray-500'>{item.notes}</span>
          </a>
                  ))} 
        </div>
        <div className="categories-menu mt-6">
            <h3 className="text-lg font-semibold text-gray-700 p-3">Categories</h3>
            {sidebarCategoriesData.map((item) => (
          <a key={item.id} href={item.href} className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded">
            {item.icon}
            <span>{item.title}</span>
            <span className='ml-auto text-gray-500'>{item.notes}</span>
          </a>
                  ))} 
        </div>
      </div>
      <div className="footer p-4"></div>
    </div>
  )
}
