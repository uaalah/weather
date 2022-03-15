import { ICity } from "../../models";
import { ReduxCitiesType } from "./types";


export interface IReduxCitiesState {
  list: ICity[]
}

interface IRCitiesActions {
  type: ReduxCitiesType.SET_CITIES;
  payload: ICity[];
}

// lo dejo preparado por si crece
export type ReduxCitiesActions =
  | IRCitiesActions