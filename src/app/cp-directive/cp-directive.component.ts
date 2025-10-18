import { Component } from '@angular/core';

@Component({
  selector: 'app-cp-directive',
  templateUrl: './cp-directive.component.html',
  styleUrls: ['./cp-directive.component.css']
})
export class CpDirectiveComponent {

}

export class DirectivesDemoComponent {
  isHighlighted = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}