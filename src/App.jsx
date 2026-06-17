import React from 'react'
import Desktop from './components/ui/Desktop'
import Tablet from './components/ui/Tablet'
import Mobile from './components/ui/Mobile'

export default function App() {
  return (
    <>
      <div className="desktop lg:block md:hidden hidden">
        <Desktop />
      </div>
      <div className="tablet hidden lg:hidden md:block">
        <Tablet />
      </div>
      <div className="mobile sm:block md:hidden">
        <Mobile />
      </div>
    </>
  )
}
