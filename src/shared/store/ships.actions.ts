import { Action } from "@ngrx/store";
import { Ship } from "../models/ship.interface";

export enum ShipsActionTypes {
  GET_SHIPS = "[Ships] Get Ships",
  GET_SHIPS_SUCCESS = "[Ships] Get Ships success",
  GET_SHIPS_ERROR = "[Ships] Get Ships error",
}

export class GetShips implements Action {
  readonly type = ShipsActionTypes.GET_SHIPS;
  constructor(public payload: number = 1) {}
}

export class GetShipsSuccess implements Action {
  readonly type = ShipsActionTypes.GET_SHIPS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetShipsError implements Action {
  readonly type = ShipsActionTypes.GET_SHIPS_ERROR;
}

export type All = GetShips | GetShipsSuccess | GetShipsError;
