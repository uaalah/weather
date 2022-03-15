import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getLoaction } from '../../controllers';
import { ICity } from '../../models';
import { RootState } from '../../redux';
import CityComponentOptions from './CityComponentOptions';
import CityComponentSearch from './CityComponentSearch';
import CityComponentSelection from './CityComponentSelection';

const CityComponent: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [options, setOptions] = useState<ICity[]>([]);
  const [results, setResults] = useState<boolean>(false);
  const list: ICity[] = useSelector((state: RootState) => state.cities.list)
 

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => setCity(e.target.value);
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const ciudades: ICity[] = await getLoaction(city);
    setOptions(ciudades)
    setResults(true);
  }
  const handleSelect = (): void => {
    setCity('');
    setOptions([]);
    setResults(false);
  }
  return (
    <>
      {list.length > 0 && <CityComponentSelection list={list} /> }

      <CityComponentSearch
        city={city}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />

      {results && <CityComponentOptions options={options} list={list} actionSelect={handleSelect} />}      
      
    </>
  )
}

export default CityComponent;