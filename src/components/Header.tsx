import React from 'react'
import '../css/Styles.css'
import Logo from '../assets/logo-bytebank.svg'
import Avatar from '../assets/avatar.svg'

const Header: React.FC = () => {
    return (
        <div className='bg-header w-full h-15 p-8 flex '>
            <img src={Logo} alt='Logo bytebank' className="max-w-full h-auto" />
            <div className='flex justify-end items-center w-full'>
                <p className='text-green pr-2'>Matheus Japoro</p>
                <img src={Avatar} alt='Avatar' />
            </div>
        </div>
    )
}

export default Header