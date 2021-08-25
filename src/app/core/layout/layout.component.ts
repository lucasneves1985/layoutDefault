import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  {

  open: boolean = true;

  constructor() { }

  toggleMenu() {
    this.open = !this.open;
  }

}
