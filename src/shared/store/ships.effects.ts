import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ShipsService } from "src/app/services/ships.service";
import { ShipsActionTypes } from "./ships.actions";
import * as ShipsActions from "./ships.actions";
import { Ship } from "../models/ship.interface";
@Injectable()
export class ShipsEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(ShipsActionTypes.GET_SHIPS),
    map((action: any) => action.payload),
    switchMap((page) => {
      return this.shipsService.getShips(page).pipe(
        map((ships: any) => new ShipsActions.GetShipsSuccess(ships)),
        catchError((err: Error) => of(new ShipsActions.GetShipsError())),
      );
    }),
  );

  constructor(private actions$: Actions, private shipsService: ShipsService) {}
}
