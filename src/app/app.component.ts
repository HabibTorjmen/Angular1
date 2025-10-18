import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP2';
  habib = 'Habib';
  users= [
    { name: 'Alice', email: 'habibtorjmen02@gmail.com', imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Bob', email: 'habibtorjmen02@gmail.com', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
  ]
app: any;
}
