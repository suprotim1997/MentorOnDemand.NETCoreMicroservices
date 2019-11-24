import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

const httpOptions1 = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("id_token")
  })
};

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Authorization": "Bearer " + localStorage.getItem("id_token")
//   })
// };

@Injectable({
  providedIn: "root"
})
export class AuthService {

  token:string;
  
  private loggedIn = false;

  

  constructor(private http: HttpClient) {}


  // Get All - API

  public getAllRegistered() {
    console.log(localStorage.getItem("id_token"));
    return this.http.get("https://localhost:44355/adminservice/GetUsers",httpOptions1);
  }

  public getAllSkills() {
    return this.http.get("https://localhost:44355/adminservice/getSkills",httpOptions1);
  }

  public getAllTraining() {
    return this.http.get("https://localhost:44355/adminservice/getTrainings",httpOptions1);
  }
  
  public getAllPayment() {
    return this.http.get("https://localhost:44355/adminservice/GetPayments",httpOptions1);
  }


  // Get All By ID - API

  public getUserById(id) {
    console.log(id);
    return this.http.get("https://localhost:44355/adminservice/"+ id,httpOptions1);
  }

  public getSkillById(id) {
    return this.http.get("https://localhost:44355/adminservice/GetSkill/" + id,httpOptions1);
  }

  public getTrainingById(id) {
    return this.http.get("https://localhost:44355/adminservice/GetTrainingById/" + id,httpOptions1);
  }

  public getPaymentById(id)
  {
    return this.http.get("https://localhost:44355/adminservice/GetPaymentById/" + id,httpOptions1);
  }

  // Get Search Data - API
 
  public getSearchData(data) {
    return this.http.get(
      "https://localhost:44355/studentservice/searchdata?trainerTechnology=" + data,httpOptions1
    );
  }

 // Post Data In Db - API

  public saveUser(regData) {
    return this.http
      .post("https://localhost:44355/authservice/register", regData)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }
 
  public saveSkill(tech) {
    console.log(tech);
    return this.http
      .post("https://localhost:44355/adminservice/skill", tech, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public saveTraining(data) {
    return this.http
      .post("https://localhost:44355/studentservice/training", data, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public savePayment(data) {
    console.log(data);
    return this.http
      .post("https://localhost:44355/studentservice/payment", data, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public login(email, password) {
    let data =
    {
      email:email,
      password :password
    }
    return this.http
      .post(
        "https://localhost:44355/authservice/login",data,
        httpOptions1
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  // Put Data By Id - API
  
  public updatePaymentAndCommisionById(id,model) {
    console.log("in update")
    return this.http
      .put("https://localhost:44355/adminservice/updatePaymentAndCommisionById/" + id, model, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }
  
  public updateUserProfileById(id,model)
  {
    console.log("in update")
    return this.http
    .put("https://localhost:44355/studentservice/" + id, model, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public updateTrainerProfileById(id,model)
  {
  console.log("in update")
  return this.http
    .put("https://localhost:44355/mentorservice/" + id, model, httpOptions1)
    .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
}

  public updateTrainingAndPaymentStatusById(id) {
    return this.http
      .put(
        "https://localhost:44355/studentservice/updateTrainingAndPaymentStatusbyId/" + id,null,
        httpOptions1
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public updateTrainingStatusById(id) {
    return this.http
      .put("https://localhost:44355/studentservice/updateTrainingStatusById/" + id,null, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public updateTrainingProgress(id,progressValue) {
    return this.http
      .put("https://localhost:44355/studentservice/updateTrainingProgressById?id=" + id + "&progressValue=" + progressValue, progressValue,  httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public updateTrainingRatings(id,rating) {
    return this.http
      .put("https://localhost:44355/studentservice/updateTrainingRatingById?id=" + id + "&rating=" + rating, rating,  httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public blockById(id) {
    return this.http
      .get("https://localhost:44355/adminservice/blockunblock/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public unBlockById(id) {
    return this.http
    .get("https://localhost:44355/adminservice/blockunblock/" + id, httpOptions1)
    .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public acceptTrainingRequestById(id) {
    return this.http
      .put("https://localhost:44355/mentorservice/acceptrequest/" + id,null, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public rejectTrainingRequestById(id) {
    return this.http
      .put("https://localhost:44355/mentorservice/rejectrequest/" + id,null, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  // Delete Data By Id - API 

  public DeleteSkillById(id) {
    return this.http
      .delete("https://localhost:44355/adminservice/DeleteSkill/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  // Store User Data For Session Purpose
  
  storeUserData(token, email, role) {
    this.token = token;
    localStorage.setItem("id_token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("email",email);
  }

  isLoggedIn() {
    if (localStorage.getItem("id_token")) {
      return (this.loggedIn = true);
    }
  }
  
  logout() {
    this.token = null;
    localStorage.clear();
    this.loggedIn = false;
  }

 
}
