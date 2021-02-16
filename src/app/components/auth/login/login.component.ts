import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";

// JSON
import usersList from "src/assets/json/users.json";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  async loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    try {
      const user = this.authService.login(username, password);
      if (user) {
        this.router.navigate(["/principal/ships"]);
      } else {
        this.unregistered = true;
      }
    } catch (err) {
      console.error(err);
    }
  }
}
