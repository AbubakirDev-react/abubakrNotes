import React from 'react'
import HeaderMenu from './header.menu'
import { HeaderData } from './header.data'

export default function Header() {
  return (
    <div className='Header w-full flex items-center p-4'>
        <div className="data flex flex-col gap-1.5">
            <div className="title flex items-center  gap-2">
                {HeaderData.icon} <span className='text-xl font-bold'>{HeaderData.title}</span>
            </div>
                <h3 className='font-semibold text-sm text-gray-500'>{HeaderData.notes} notes</h3>
        </div>
        <HeaderMenu />
    </div>
  )
}
