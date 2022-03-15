import React from 'react'
import { useDispatch } from 'react-redux';
import { ICity } from '../../../models';
import { setCities } from '../../../redux/cities/actions';
import { IReduxCitiesState } from '../../../redux/cities/models';
import { saveState } from '../../../services';
import CityComponentOptionsItem from '../CityComponentOptionsItem';

interface CityComponentSelectionProps {
  list: ICity[];
}

const CityComponentSelection: React.FC<CityComponentSelectionProps> = ({ list }) => {
  
  const dispatch = useDispatch();

  const handlerOption = (item: ICity) => {
    const newList = list.filter(el => el !== item);
    const listToSave: IReduxCitiesState = {
      list: newList
    }
    saveState('cities', listToSave)
    dispatch(setCities(newList))
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