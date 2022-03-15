import React from 'react'

import { ICity } from '../../../models';


interface IButtonAddCity extends ICity { 
  action: () => void;
}

const CityComponentOptionsItem: React.FC<IButtonAddCity> = (props) => {
  const {
    name,
    state,
    country,
    lat,
    lon,
    action
  } = props;
  return (
    <button onClick={action}>
      {name}, {state}, {country} <br />
      lat: {lat}, long: {lon}
    </button>
  )
}

export default CityComponentOptionsItem;