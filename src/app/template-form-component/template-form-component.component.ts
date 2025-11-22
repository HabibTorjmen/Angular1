import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form-component',
  templateUrl: './template-form-component.component.html',
  styleUrl: './template-form-component.component.css'
})
export class TemplateFormComponentComponent {
  onSubmit(form:any){
    console.log(form.value);
  }

}
