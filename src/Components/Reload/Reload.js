import React from 'react'
import './Reload.css';
import { IoReloadCircle } from 'react-icons/io5';

export default function Reload({reloadCountries}) {
    return (
        <div className='reload-btn' onClick={reloadCountries}>
            <span className='reload-icon'>
                <IoReloadCircle  style={{color:'black',width:'3rem',height:'3rem'}} />
            </span>
        </div>
    )
}
