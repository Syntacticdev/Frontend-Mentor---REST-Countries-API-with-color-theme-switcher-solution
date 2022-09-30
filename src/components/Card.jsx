import React from 'react'
import {Link} from "react-router-dom"

const Card = ({country}) => {
  return (
    <Link to={`/${country.name.common}`}>
        <div className='rounded-md overflow-hidden bg-white h-[340px] grid grid-rows-[40%,60%]  sm:w-[260px] dark:bg-darkBlue ' >
        <img className='w-full h-full' src={`${country.flags.png}`} alt="flag" />
        <div className="details flex justify-center flex-col  p-4">
        <h1 className='font-bold my-2 dark:text-white'>{country.name.official}</h1>
            <div><span className='font-semibold dark:text-white'>Population:</span><span className='px-2 text-darkGray'>{country.population}</span></div>
            <div><span className='font-semibold dark:text-white'>Region:</span><span className='px-2 text-darkGray'>{country.region}</span></div>
            <div><span className='font-semibold dark:text-white'>Capital:</span><span className='px-2 text-darkGray'>{country.capital && country.capital[0]}</span></div>
        </div>
    </div>
    </Link>
  )
}

export default Card