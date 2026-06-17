import { LucideNotebookPen, NotebookText,Plus,Search,SidebarCloseIcon } from 'lucide-react'
import React from 'react'
import sidebarHeaderData, {UserProfile} from './sidebar.data'
import sidebarCategoriesData from './sidebar.categories.data'


export default function Sidebar() {
  return (
    <div className='sidebar xl:w-1/5 lg:w-1/4 h-auto'>
      <div className="header px-3 py-1.5">
        <div className="header flex items-center justify-between">
            <h1 className='text-2xl font-bold flex items-center gap-2'><LucideNotebookPen className="text-purple-900" /><span> Notes</span></h1>
        {/* <button className="p-2 hover:bg-gray-200 rounded">
          <SidebarCloseIcon />
        </button> */}
        </div>
        
            
            <input id="price" type="text" name="price" placeholder='Search notes...' className="w-full mt-4 shadow shadow-mist-500 border-gray-400 rounded xl:p-3 lg:p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        
        <div className="mt-3 pt-1 w-full flex justify-center">
          <button className="w-full mt-auto flex items-center justify-center bg-purple-600 text-white xl:p-3 lg:p-2 rounded hover:bg-purple-700">
            <Plus /> New Note
          </button>
        </div>
      </div>
      <div className="body px-3 py-2">
        <div className="header-menu">
            {sidebarHeaderData.map((item) => (
          <a key={item.id} href='#' className={`flex items-center gap-2 lg:p-3 md:p-1.5 hover:bg-gray-200 hover:${item.color} rounded focus:${item.color} focus:bg-gray-200 xl:text-lg lg:text-sm`}>
            {item.icon}
            <span>{item.title}</span>
            <span className='ml-auto text-gray-500'>{item.notes}</span>
          </a>
                  ))} 
        </div>
        <div className="categories-menu mt-2">
            <h3 className="xl:text-2xl lg:text-lg font-semibold text-gray-700 p-3">Categories</h3>
            {sidebarCategoriesData.map((item) => (
          <a key={item.id} href='#' className="flex items-center gap-2 lg:p-1.5 xl:text-lg lg:text-sm xl:p-3 hover:bg-gray-200 focus:bg-gray-200 rounded md:text-sm">
            {item.icon}
            <span>{item.title}</span>
            <span className='ml-auto text-gray-500'>{item.notes}</span>
          </a>
                  ))} 
        </div>
      </div>
    </div>
  )
}
