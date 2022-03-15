import { ICity } from "../../models";
import { ReduxCitiesType } from "./types";

export function setCities(list: ICity[]) {
  return {
    type: ReduxCitiesType.SET_CITIES,
    payload: list
  }
}