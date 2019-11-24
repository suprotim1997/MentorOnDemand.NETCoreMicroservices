import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-trainer-edit-profile",
  templateUrl: "./trainer-edit-profile.component.html",
  styleUrls: ["./trainer-edit-profile.component.css"]
})
export class TrainerEditProfileComponent implements OnInit {
 // Id: any;
  model: any;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.getUserById(localStorage.getItem("lid")).subscribe(data => {
        this.model = data;
       });
  //  this.getParamData();
  // this.getById(this.Id);
  }

  // getParamData() {
  //   this.route.queryParams.subscribe(params => {
  //     let pid = params["id"];
  //     this.paramId = +pid;
  //     console.log("param id " + this.paramId);
  //   });
  // }

  // getById(Id) {
  //   this.auth.getUserById(localStorage.getItem("lid")).subscribe(data => {
  //     this.model = data;
  //   });
  // }

  onSubmit() {
    this.auth
      .updateTrainerProfileById(localStorage.getItem("lid"), this.model)
      .subscribe(data => {
        alert("updated");
        this.router.navigateByUrl("trainer-dashboard/trainer-profile");
      });
  }
}
