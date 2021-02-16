import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.scss"],
  providers: [AuthService],
})
export class PrincipalComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    const user = await this.authService.getCurrentUser();
    if (user) {
      this.isLoggedIn = true;
    }
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate([""]);
  }
}
