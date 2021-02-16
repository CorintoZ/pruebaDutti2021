import { All, ShipsActionTypes } from "./ships.actions";
import { createSelector } from "@ngrx/store";

import { Ship } from "../models/ship.interface";
import { RootState } from "./store";

export class ShipsState {
  ships: Array<Ship>;
}

const INITIAL_STATE: ShipsState = {
  ships: [],
};

export function shipsReducer(state: ShipsState = INITIAL_STATE, action: All) {
  switch (action.type) {
    case ShipsActionTypes.GET_SHIPS:
      return {
        ...state,
      };

    case ShipsActionTypes.GET_SHIPS_SUCCESS:
      return {
        ...state,
        ships: action.payload,
      };

    case ShipsActionTypes.GET_SHIPS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const selectShips = (state: RootState) => state.ships;
