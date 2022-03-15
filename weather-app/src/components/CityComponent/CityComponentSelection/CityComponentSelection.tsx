import React from 'react'
import { useDispatch } from 'react-redux';
import { ICity } from '../../../models';
import { setCities } from '../../../redux/cities/actions';
import CityComponentOptionsItem from '../CityComponentOptionsItem';

interface CityComponentSelectionProps {
  list: ICity[];
}

const CityComponentSelection: React.FC<CityComponentSelectionProps> = ({ list }) => {
  
  const disatch = useDispatch();

  const handlerOption = (item: ICity) => {
    const newList = list.filter(el => el !== item);
    disatch(setCities(newList))
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.lat + item.lon}><CityComponentOptionsItem {...item} action={() => handlerOption(item)} /></li>
      ))}
    </ul>
  )
}

export default CityComponentSelection;