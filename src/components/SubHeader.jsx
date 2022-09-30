import React from 'react'
import { useNavigate } from "react-router-dom"

const SubHeader = ({ updateCountry }) => {
    const navigate = useNavigate()
    const search = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.key === "Enter") {
            navigate(`/${e.target.value}`)
        }
    }
    return (
        <div className='py-2 w-[90%] sm:flex sm:justify-between my-2 sm:w-4/5 mx-auto'>
            <div className='w-full sm:w-2/4'>
                <input autoComplete="off" onKeyDown={search} className='outline-none p-2 w-full sm:w-full rounded-sm' placeholder='Search for a country' type="text" name="" list='search' />
            </div>
            <select name="region" id="region" onClick={(e) => { updateCountry(e.target.value) }} className='w-3/5 sm:w-1/5 p-2 rounded-sm outline-none mt-2  sm:mt-0'>

                <option className='py-2 bg-red-300 border-none' value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="antarctic">Antarctic</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>


        </div>
    )
}

export default SubHeader