import React from 'react'
import { useDispatch } from 'react-redux';
import { matchLocations } from '../../../controllers';
import { ICity } from '../../../models';
import { setCities } from '../../../redux/cities/actions';
import { IReduxCitiesState } from '../../../redux/cities/models';
import { saveState } from '../../../services';
import CityComponentOptionsItem from '../CityComponentOptionsItem';

interface CityComponentOptionsProps {
  options: ICity[];
  list: ICity[];
  actionSelect: () => void;
}

const CityComponentOptions: React.FC<CityComponentOptionsProps> = ({ options, list, actionSelect }) => {

  const clean_options: ICity[] = matchLocations(options, list);

  const dispatch = useDispatch();

  const handlerOption = (item: ICity) => {
    const newList = [...list, item];
    const listToSave: IReduxCitiesState = {
      list: newList
    }
    saveState('cities', listToSave)
    dispatch(setCities(newList))
    actionSelect();
  }
  
  return (
    <>
      {clean_options.length > 0 ? (
        <ul>
          {clean_options.map(item => {
            return (
              <li key={item.lat + item.lon}><CityComponentOptionsItem {...item} action={() => handlerOption(item)} /></li>
            )
          })}
        </ul>
      ) : (
        <p>No se han encontrado resultados</p>
      )}
    </>
  )
}

export default React.memo(CityComponentOptions);