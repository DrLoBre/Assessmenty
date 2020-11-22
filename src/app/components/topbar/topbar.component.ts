import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {AssessmentService} from '../../services/assessment.service';
import { Router } from '@angular/router';
import {User} from '../../models/User';
import {Assessment} from '../../models/Assessment';
import {firestore} from 'firebase';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  user: firebase.User;
  userInfo: User;
  closeResult = '';

  constructor(private authService: AuthService,
              private assesmentService: AssessmentService,
              private router: Router,
              private modalService: NgbModal
  ) { }

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

  onAddAssessment(title: string, principal: string, client: string, applied: string, deadline: string, description: string): void {
    const assessment = new Assessment();

    assessment.title = title;
    assessment.description = description;
    assessment.principal = principal;
    assessment.client = client;
    assessment.applied = firestore.Timestamp.fromDate(new Date(applied));
    assessment.deadline = firestore.Timestamp.fromDate(new Date(deadline));
    assessment.status = 'in Progress';

    this.assesmentService.addAssessment(assessment);
    this.modalService.dismissAll();
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
