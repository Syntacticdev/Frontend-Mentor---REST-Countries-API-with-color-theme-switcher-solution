import React from 'react'


const Header = ({toggleDarkMode}) => {
  return (
    <div className='flex justify-between shadow-sm fixed top-0 w-full shadow-darkBlue py-6 px-10 bg-white items-center dark:bg-darkBlue dark:text-white'>
        <h3 className='font-semibold'>Where in the world</h3>

        <button className="outline-none" onClick={()=> toggleDarkMode()}>
            Dark Mode
        </button>
    </div>
  )
}

export default Header