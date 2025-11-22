import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactifform',
  templateUrl: './reactifform.component.html',
  styleUrls: ['./reactifform.component.css']
})
export class ReactifformComponent {

  myform: FormGroup;

  constructor() {
    this.myform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log(this.myform.value);
    }
  }
}
