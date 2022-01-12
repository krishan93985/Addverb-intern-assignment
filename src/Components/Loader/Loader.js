import React from 'react'
import { FiLoader } from 'react-icons/fi';
import './Loader.css';

export default function Loader() {
    return (
        <div className='loader-wrapper'>
                <FiLoader className='loader' style={{color:'white'}} />
        </div>
    )
}
