import { IState } from "../redux";
import { IReduxCitiesState } from "../redux/cities/models";
import defaultState from "../redux/cities/state";

// lo dejo preparado por si me da por hacerlo crecer
type ISaveStateProps =
  | IReduxCitiesState;

export function saveState(objKey: string, objValue: ISaveStateProps) {
  let newStatus = loadState();
  newStatus = {
    ...newStatus,
    [objKey]: objValue
  }
  window.localStorage.setItem('weatherApp', JSON.stringify(newStatus))
}

export function loadState() {
  if (window && window.localStorage) {
    const storageStatus = window.localStorage.getItem('weatherApp');
    if (storageStatus) {
      console.log('storageStatus \n', JSON.parse(storageStatus))
      return JSON.parse(storageStatus);
    }
  }
  const reduxDefaultState: IState = {
    cities: defaultState
  }
  console.log('dashboard default', reduxDefaultState)
  return reduxDefaultState;
}