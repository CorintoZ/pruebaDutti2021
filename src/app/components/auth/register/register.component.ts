import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";

// JSON
import usersList from "src/assets/json/users.json";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  dataLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.minLength(3)]],
      last_name: ["", [Validators.required, Validators.minLength(3)]],
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  async registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    const { username, email, password, first_name, last_name } = this.registerForm.value;
    try {
      const user = this.authService.register(email, password, username, first_name, last_name);
      if (user) {
        this.router.navigate(["/principal/pageOne"]);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
