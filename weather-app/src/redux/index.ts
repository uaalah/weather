import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IReduxCitiesState } from './cities/models';
import citiesReducer from './cities/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const RootReducer = combineReducers({
  cities: citiesReducer,
});

export type RootState = ReturnType<typeof RootReducer>

export interface IState {
  cities: IReduxCitiesState;
}

const weatherStore = createStore(
  RootReducer,
  composeWithDevTools()
)

export default weatherStore;