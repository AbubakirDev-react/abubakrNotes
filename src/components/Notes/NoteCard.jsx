import { useState } from 'react'
import React from 'react'
import {Button,Dialog,DialogPanel,DialogTitle } from '@headlessui/react'
import { Star } from 'lucide-react';


export default function NoteCard({note}) {
  const [isOpen,setIsOpen] = useState(false);
  function open(){
    setIsOpen(true)
  }
  function close(){
    setIsOpen(false)
  }

  return (
    <div className='p-4 bg-gray-500 rounded-2xl'>
        <Button onClick={open}>{note.title}</Button>
          <Dialog open={isOpen} as='div' className='relative z-10 focus:outline-none' onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform[scale(95%)] data-closed:opacity-0">
              <DialogTitle as='h3' className='text-base/7 font-medium text-white flex justify-between'>
                {note.title} {note.favourited && <Star fill='gold' color='yellow' />}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                {note.data}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
            </div>
            </div>
        </Dialog>
        </div>
  )
}
