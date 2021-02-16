import { ActionReducerMap } from "@ngrx/store";
import { ShipsState, shipsReducer } from "./ships.reducer";

export interface RootState {
  ships: ShipsState;
}

export const reducers: ActionReducerMap<RootState> = {
  ships: shipsReducer,
};
