import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Components
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "principal",
    loadChildren: () => import(`./components/principal/principal.module`).then((m) => m.PrincipalModule),
  },
  { path: "login", loadChildren: () => import("./components/auth/login/login.module").then((m) => m.LoginModule) },
  {
    path: "register",
    loadChildren: () => import("./components/auth/register/register.module").then((m) => m.RegisterModule),
  },
  // { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
