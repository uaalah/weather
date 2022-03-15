import { ICoords } from ".";


export interface ICity extends ICoords{
  name: string;
  local_names: Record<string, string>;
  country: string;
  state?: string;
}

export interface ICityRequst {
  q: string;
  limit: number;
  APPID: string;
}