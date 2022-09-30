import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"
import { TraceSpinner } from "react-spinners-kit"


const Details = () => {
    const [country, setCountry] = useState("")
    let { country_common_name } = useParams()
    let commonName = country_common_name.split(" ")[0]
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${commonName}`)
            .then((res) => res.json())
            .then((data) => setCountry(data[0]))
        return () => false
    }, [commonName])
    let navigate = useNavigate()
    return (
        <div className='bg-deepWhite min-h-screen dark:text-white dark:bg-veryDarkBlue'>
            {country ? (<div className='sm:px-16 sm:py-10'>
                <button onClick={() => navigate("/", { replace: true })} className='bg-red-400 m-4 font-semibold rounded-md px-7 py-1'>back</button>
                <div className='my-6 sm:min-h-80 grid sm:grid-cols-[50%,50%]  '>
                    <img className='h-full w-full' src={`${country.flags.png}`} alt="" />
                    <div className='p-6 '>
                        <h3 className='text-2xl font-bold'>Belgium</h3>

                        <div className='country-details py-5  sm:grid grid-cols-2 text-sm'>
                            <div className=''>
                                <ul className="grid gap-2">
                                    <li><span className="font-bold">Native Name:</span><span className='px-2'>{country?.name?.nativeName.eng?.official ?? country?.name?.common}</span></li>
                                    <li><span className="font-bold">Population:</span><span className='mx-2'>{country.population}</span></li>
                                    <li><span className="font-bold">Region:</span><span className='mx-2'>{country.region}</span></li>
                                    <li><span className="font-bold">Sub Region:</span><span className='mx-2'>{country.subregion}</span></li>
                                    <li><span className="font-bold">Capital:</span><span className='mx-2'>{country.capital && country.capital[0]}</span></li>
                                </ul>
                            </div>
                            <div className='mt-8 sm:mt-0'>
                                <ul className='grid gap-2'>
                                    <li><span className="font-bold">Top Level Domains</span><span className='mx-2'>{country.tld[0]}</span></li>
                                    <li><span className="font-bold">Currencies:</span><span className='mx-2'>{country.currencies[Object.keys(country.currencies)]?.name}</span></li>
                                    <li><span className="font-bold">Languages:</span><span className='mx-2'>{country.languages[Object.keys(country.languages)]}</span></li>

                                </ul>
                            </div>
                        </div>

                        <div className='country-border mt-7 text-md flex items-center '>
                            <span className='font-bold'>border countries: </span>
                            <div className='text-sm grid gap-2 grid-cols-4 mx-3'>
                                {country?.borders?.map((border) => (
                                    <span className='bg-white mx-1 px-4 py-1 rounded-md dark:text-darkGray'><Link to='/'>{border}</Link></span>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>) : (
                <div className='flex justify-center items-center w-screen h-80'>
                    <TraceSpinner size={80} color="#000000" />
                </div>
            )}
        </div>
    )
}

export default Details