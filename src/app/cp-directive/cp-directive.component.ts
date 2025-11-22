import { Component } from '@angular/core';

@Component({
  selector: 'app-cp-directive',
  templateUrl: './cp-directive.component.html',
  styleUrl: './cp-directive.component.css'
})
export class CpDirectiveComponent {
  isVisible = true;
  fruits = ['Pomme', 'Banane', 'Orange', 'Mangue'];
  
  toggleVisibility(){
  this.isVisible = !this.isVisible;
  }
  isHighlighted = false;
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  Meteo: any;
  changerMeteo() {
    const options = ['soleil', 'pluie'];
    const randomIndex = Math.floor(Math.random() * options.length);
    this.Meteo = options[randomIndex];
  }
}