import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
   user : string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = window.localStorage.getItem('user');
    console.log(this.user);
  }


  navigateToTest() {
    this.router.navigate(['/test']);
  }
}
