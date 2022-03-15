import { ReduxCitiesActions, IReduxCitiesState } from "./models";
import defaultState from "./state";
import { ReduxCitiesType } from "./types";


export default function citiesReducer(state: IReduxCitiesState = defaultState, action: ReduxCitiesActions) {
  switch (action.type) {
    case ReduxCitiesType.SET_CITIES:
      return { ...state, list: action.payload }
    default:
      return state;
  }
}