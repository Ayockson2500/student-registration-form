import React from 'react'
import Button from '../../component/button/Button'
import NavBar from '../../component/navbar/NavBar'
import heroImage from '../../assets/img/heroImage.PNG'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='relative'>
      <NavBar />
      <main className='px-9'>
        <div className='flex items-center justify-between mt-9'>

            <div className='w-1/2 space-y-56 py-9'>
                <h1 className='text-5xl text-RfNavy'>Register for the <br /> Holiday Quiz</h1>
                <div className='space-x-8'>
                   <Link to={'register'} className={'uppercase text-RfWhite bg-RfOrange text-xs py-4 px-9 rounded-md'}>Register</Link> 
                   <Link to={'/login'} className={'uppercase text-RfWhite bg-Rfcyan text-xs py-4 px-9 rounded-md'}>Login</Link> 
                </div>
            </div>

            <div className='w-1/2 flex items-center justify-center'>
                <img src={heroImage} alt="" />
            </div>

        </div>
      </main>
    </div>
  )
}

export default Home