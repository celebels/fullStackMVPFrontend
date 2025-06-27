import React from 'react'
import BigTitle from '../components/BigTitle'
import { Link, useLocation } from 'react-router-dom'

export default function Error() {
    let location = useLocation();
    const finalLocation = location.pathname.substring(1);
  return (
    <div className='text-black items-center w-screen mx-auto flex flex-col'>
        <BigTitle text="404 not found"/>
        <h3>Nao achamos <span className='text-2xl font-bold tracking-wider' >{finalLocation}</span>  </h3>
        <p>tente outro link ou <Link to="/">Retorne a home page  ❣ </Link> </p>
  
    </div>
  )
}
