import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
//  paramId:number;
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
    // this.getParamData();
    // this.getById();
  }

  // getParamData() {
  //   this.route.queryParams.subscribe(params => {
  //     let pid = params["id"];
  //     this.paramId = +pid;
  //     console.log("param id " + this.paramId);
  //   });
  // }

  // getById() {
  //   this.auth.getUserById(localStorage.getItem("lid")).subscribe(data => {
  //     this.model = data;
  //   });
  // }

  onSubmit() {
    this.auth
      .updateUserProfileById(localStorage.getItem("lid"), this.model)
      .subscribe(data => {
        alert("updated");
        this.router.navigateByUrl("user-dashboard/profile");
      });
  }
}

