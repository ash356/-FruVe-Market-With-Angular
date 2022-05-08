import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
}

