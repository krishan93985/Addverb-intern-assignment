import './App.css';
import Header from './Components/Header/Header';
import Countries from './Components/Countries/Countries';
import Loader from './Components/Loader/Loader';
import Reload from './Components/Reload/Reload';
import { useState,useEffect } from 'react';

function App() {
  const [loading,setLoading] = useState(false);
  const [countries,setCountries] = useState([]);

    const loadCountries = async () => {
        try{
            setCountries([]);
            setLoading(true);
            const countriesJson = await fetch('https://restcountries.com/v3.1/region/asia',{
                method:'GET',
                headers:{'Content-Type':'application/json'}
            })
    
            const countries = await countriesJson.json();
            setCountries(countries);
            setLoading(false);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
      loadCountries();
    }, [])

  return (
    <div className="App">
      <Header/>
      <Countries countries={countries}/>
      {loading && <Loader/>}
      <Reload reloadCountries={loadCountries}/>
    </div>
  );
}

export default App;
