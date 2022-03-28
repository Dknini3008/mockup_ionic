import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  constructor() {}

  out = 'Sorry, this is not working :('

  notWorking(){
    alert(this.out);
  }

  ngOnInit() {
  }

}
