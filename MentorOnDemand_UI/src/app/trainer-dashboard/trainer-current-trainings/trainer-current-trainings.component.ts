import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-trainer-current-trainings',
  templateUrl: './trainer-current-trainings.component.html',
  styleUrls: ['./trainer-current-trainings.component.css']
})
export class TrainerCurrentTrainingsComponent implements OnInit {

  curT: any;
  curT1: any;
  lid:number;
  constructor(public auth: AuthService) {}

  ngOnInit() {
    let localid = localStorage.getItem("lid");
    this.lid = +localid;
    console.log(this.lid);
    this.getCurrentTraining();
  }

  getCurrentTraining() {
    this.auth.getAllTraining().subscribe(data => {
      this.curT1 = data;
      console.log(this.curT1);
      this.curT = _.where(this.curT1, { status: "Current", mentorId : localStorage.getItem("lid") });
      console.log(this.curT);
    });
  }
}