import {Component, OnInit, Input} from '@angular/core';
import {Assessment} from '../../models/Assessment';
import {ModalDismissReasons, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AssessmentService} from '../../services/assessment.service';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/User';
import * as firebase from 'firebase';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  @Input() assessment: Assessment;

  closeResult = '';
  user: firebase.User;
  userInfo: User;

  constructor(
    private modalService: NgbModal,
    private assessmentService: AssessmentService,
    private authService: AuthService,
    private config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.authService.getUserState().subscribe(user => {
      this.user = user;
      this.authService.getUserEntry(this.user.uid).subscribe(userData => {
        this.userInfo = userData;
      });
    });
  }

  onFinish(): void {
    const newAssessment = this.assessment;
    newAssessment.status = 'Finished';

    this.assessmentService.editAssessment(newAssessment);
    this.modalService.dismissAll();
  }

  onDelete(): void {
    this.assessmentService.deleteAssessment(this.assessment);
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
