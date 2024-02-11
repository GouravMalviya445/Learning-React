import React from 'react'

function Nav() {
  return (
    <>
        <nav className='fixed left-0 top-0 w-full h-20 bg-fuchsia-500 flex items-center justify-between'>
            <a href="#" className='hover:none'>Gourav</a>
            <a href="#">Contect Us</a>
            <a href="#">About us</a>
        </nav>
    </>
  )
}

export default Nav