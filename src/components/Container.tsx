import React from 'react'
import '../css/Styles.css'
import Menu from './Menu'

const Container: React.FC = () => {
    return (
        <div className='bg-theme w-full h-full flex flex-row '>
            <Menu />
        </div>
    )
}

export default Container