import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { Assessment } from '../../models/Assessment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  assessments: Assessment[];

  constructor(
    public assessmentService: AssessmentService
    ) { }

  ngOnInit(): void {
    this.assessmentService.getAssessments().subscribe(assessments => {
      this.assessments = assessments;
    });
  }

}
