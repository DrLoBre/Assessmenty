import { Component, OnInit, Input } from '@angular/core';
import { Assessment } from '../../models/Assessment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  @Input() assessment: Assessment;

  constructor() { }

  ngOnInit(): void {
  }

}
