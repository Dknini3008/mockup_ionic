import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor() { }

  out = 'Sorry, this is not working :('

  notWorking(){
    alert(this.out);
  }

  ngOnInit() {
  }

}
