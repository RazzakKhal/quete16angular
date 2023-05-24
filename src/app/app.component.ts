import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userForm = this.fb.group({
    credentials : this.fb.group({
      email : [''], 
      password : ['']
    }),
    username : [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: ['']
  })

});


  constructor(private fb : FormBuilder){

  }


  onSubmit(){
    console.log(this.userForm.value);
  }
}
