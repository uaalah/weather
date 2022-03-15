import React from 'react'
import { useSelector } from 'react-redux'
import { ICity } from '../../models'
import { RootState } from '../../redux'
import Card from './Card/Card'

const Cards: React.FC = () => {
  const list: ICity[] = useSelector((state: RootState) => state.cities.list)
  return (
    <>
      {list.length > 0 ? (
        <ul>
          {list.map(item => (
            <li key={item.lat + item.lon}><Card {...item} /></li>
          ))}
        </ul>
      ) : (
        <p>No hay ninguna localidad seleccionada.</p>
      )}
    </>
  )
}

export default Cards