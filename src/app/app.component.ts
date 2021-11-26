import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ["male", "female"];
  defaultMale = "male";

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // }); // to set the whole form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    }); //the patch value will keep the other data in the form
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
