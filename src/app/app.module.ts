import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { PrincipalModule } from "./components/principal/principal.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Components
import { AppComponent } from "./app.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { environment } from "src/environments/environment";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ShipsEffects } from "src/shared/store/ships.effects";
import { reducers } from "src/shared/store/store";

@NgModule({
  declarations: [AppComponent, PrincipalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ShipsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
