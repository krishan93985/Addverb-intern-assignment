import React from 'react'
import './Countries.css';
import Country from '../Country/Country';

export default function Countries({countries,loadCountries}) {
    return (
        <div className='countries-wrapper'>
            {countries.map((country,index) => <Country key={index} country={country} />)}
        </div>
    )
}
