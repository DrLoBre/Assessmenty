import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { Assessment } from '../../models/Assessment';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  assessments: Assessment[];
  user: firebase.User;
  role: string;

  constructor(
    public assessmentService: AssessmentService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.assessmentService.getAssessments().subscribe(assessments => {
      this.assessments = assessments;
    });
  }

}
