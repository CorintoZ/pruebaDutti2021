import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { PrincipalModule } from "./components/principal/principal.module";

// Components
import { AppComponent } from "./app.component";
import { PrincipalComponent } from "./components/principal/principal.component";

@NgModule({
  declarations: [AppComponent, PrincipalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, PrincipalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}