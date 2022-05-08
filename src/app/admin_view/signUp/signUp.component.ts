import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector:'app-admin-view',
    templateUrl:'./signUp.component.html',
    styleUrls:['./signUp.component.css']
})

export class AdminSignUp{
    constructor(private ro:Router){}

    onSubmit(cForm:NgForm){
        let user={
            first_name:cForm.value.firstname,
            last_name:cForm.value.lastname,
            user_name:cForm.value.username,
            e_mail:cForm.value.email,
            Pass_word:cForm.value.password,
            re_password:cForm.value.repassword
        }
        cForm.reset();

    }

    // goToSignIn(){
    //     this.ro.navigate(['/SignIn'])
    //   }
}