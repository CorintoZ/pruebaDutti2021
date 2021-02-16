import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  const FirestoreSub = {};

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [FormsModule, RouterTestingModule.withRoutes([]), ReactiveFormsModule],
        providers: [AngularFirestore, { provide: AngularFirestore, useValue: FirestoreSub }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should login form is valid", () => {
    component.loginForm.get("username").setValue("test");
    component.loginForm.get("password").setValue("123456");
    expect(component.loginForm.valid).toBeTruthy();
  });
  it("should login form is invalid", () => {
    component.loginForm.get("username").setValue(null);
    expect(component.loginForm.valid).toBeFalsy();

    component.loginForm.get("password").setValue(null);
    expect(component.loginForm.valid).toBeFalsy();
  });
  it("should submit button disabled on login form invalid", () => {
    component.loginForm.get("username").setValue(null);

    const submitBtn = fixture.debugElement.query(By.css(".buttons__login")).nativeElement;
    expect(submitBtn.disabled).toBeTrue();
    expect(submitBtn.textContent).toContain("Iniciar sesión");
  });
});
