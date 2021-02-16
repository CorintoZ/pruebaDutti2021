import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ShipsService } from "src/app/services/ships.service";
import { GetShips } from "src/shared/store/ships.actions";
import { selectShips } from "src/shared/store/ships.reducer";
import { RootState } from "src/shared/store/store";

@Component({
  selector: "app-ships",
  templateUrl: "./ships.component.html",
  styleUrls: ["./ships.component.scss"],
})
export class ShipsComponent implements OnInit {
  @Input() page;
  public dataList: any = [];

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetShips(this.page));
    this.store.select(selectShips).subscribe((ships) => {
      this.dataList = ships.ships;
      console.log("SHIPS -->", this.dataList);
    });
  }
}
