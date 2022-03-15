import React from 'react'

interface CityComponentSearchProps {
  city: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CityComponentSearch: React.FC<CityComponentSearchProps> = ({city, handleSubmit, handleInput}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={city} onChange={handleInput} />
      <button type='submit' disabled={city === ''}>buscar</button>
    </form>
  )
}

export default CityComponentSearch