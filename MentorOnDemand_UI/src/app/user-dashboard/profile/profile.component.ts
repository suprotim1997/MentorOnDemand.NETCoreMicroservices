import { Component, OnInit } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
 
  id:number;
  model: any;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.getUserById(localStorage.getItem("lid")).subscribe(data => {
      this.model = data;
      console.log(this.model);
    });
  }

  // gettingUserById() {
    
  // }
  moveToEdit(id)
  {
    let data = {
      id: id
    };
    this.router.navigate(["user-dashboard/edit-profile"], {
      queryParams: data
    });
  }
}
