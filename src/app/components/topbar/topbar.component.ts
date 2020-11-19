import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {User} from '../../models/User';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  user: firebase.User;
  userInfo: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserState().subscribe(user => {
      this.user = user;
      this.authService.getUserEntry(this.user.uid).subscribe(userData => {
        this.userInfo = userData;
      });
    });
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
