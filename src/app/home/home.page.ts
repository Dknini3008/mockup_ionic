import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  out = 'Sorry, this is not working :('

  notWorking(){
    alert(this.out);
  }

}
