import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cppresentation',
  templateUrl: './cppresentation.component.html',
  styleUrl: './cppresentation.component.css'
})
export class CppresentationComponent {
@Input() user!: { name: string, email: string, imageUrl: string };
@Output() contact = new EventEmitter<string>();
onContact() {
this.contact.emit(this.user.email);}
}
