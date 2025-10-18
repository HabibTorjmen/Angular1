import { Component } from '@angular/core';

@Component({
  selector: 'app-cp-pipe',
  templateUrl: './cp-pipe.component.html',
  styleUrl: './cp-pipe.component.css'
})
export class CpPipeComponent {


today: number=Date.now();
}
