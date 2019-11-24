import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as _ from "underscore";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-trainer-navbar",
  templateUrl: "./trainer-navbar.component.html",
  styleUrls: ["./trainer-navbar.component.css"]
})
export class TrainerNavbarComponent implements OnInit {
  lid: number;
  role: string;
  userData: any;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    console.log(localStorage.getItem("role"));
    this.role=localStorage.getItem("role");
    // // let localid = localStorage.getItem("lid");
    // // this.lid = +localid;
    // // console.log(this.lid);
    // // this.auth.getUserById(this.lid).subscribe(data => {
    // //   this.userData = data;
    // });
  }

  notification() {
    if (this.role === '1') {
      alert("No Notification Yet");
    } else if (this.role === '2') {
      this.router.navigateByUrl("/trainer-dashboard/trainer-notification");
    } else if (this.role == '3') {
      this.router.navigateByUrl("/user-dashboard/user-notification");
    } else {
      console.log("Invalid User");
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["home"]);
    alert("route");
  }
  
}
