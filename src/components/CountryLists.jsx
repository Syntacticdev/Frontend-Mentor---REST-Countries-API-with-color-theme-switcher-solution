import React, { useState, useEffect } from 'react'
import Card from './Card'
import SubHeader from './SubHeader'
import { TraceSpinner } from "react-spinners-kit"

const CountryLists = () => {
    const [data, setData] = useState([])
    const [countrys, setCountrys] = useState(data)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => {
            setCountrys(data)
            setData(data)
        })
    }, [])

    const updateCountry = (value) => {
        const region = data.filter((country) => country.region.toLowerCase() === value.toLowerCase() && country)
        setCountrys(region)
    }

    return (
        <>
            {
                countrys.length > 0 ? (
                    <div>
                        <SubHeader updateCountry={updateCountry} />
                        <div className='p-6 w-screen grid justify-center  sm:sm:grid-cols-2  md:sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:px-14 sm:gap-4 lg:gap-8'>
                            {countrys.map((country, i) => (
                                <Card key={i} country={country} />
                            ))}
                        </div>

                    </div>) : (
                    <div className='flex justify-center items-center w-screen h-80'>
                        <TraceSpinner size={80} color="#000000" />
                    </div>
                )
            }

        </>
    )
}

export default CountryLists