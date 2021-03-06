import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveUserinfoService } from 'src/app/services/save-userinfo.service';
import { TitleService } from 'src/app/services/title.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import User from '../../models/User';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
 timeRem : string = '00:00:00';
 user: User; 
 test: any;
 result: any;
 percentage : string;
  constructor(private router : Router,
    private userSave: SaveUserinfoService,
    private authenticationService: AuthenticationService,
    private titleService: TitleService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 

    //get test object from storage
    this.test = JSON.parse(window.localStorage.getItem('test'));

    this.result = JSON.parse(window.localStorage.getItem('result'));
    this.percentage =  ((this.result.marks * 100) / this.result.total).toFixed(2);

    this.userSave.saveScoreDataToServer({
      time_started: window.localStorage.getItem('test_time_started'),
      time_finished: new Date().toLocaleTimeString(),
      score: this.result.marks,
      unanswered: this.result.unanswered,
      user: this.user.username,
      test: this.test.name 
    });
  }

  testAgain(){
    window.localStorage.removeItem('result');
    this.router.navigate(['/quiz']);
  }

  deleteUser() {
    this.authenticationService.deleteUser();
    
    //go to a route where after user sign in checking redirects to login 
    this.router.navigate(['/notification']);
  }

  review(){
    this.router.navigate(['/review']);
  }

  get title() {
    return this.titleService.getValue();
  }

}

