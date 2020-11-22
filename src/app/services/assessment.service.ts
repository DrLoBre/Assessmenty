import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Assessment } from '../models/Assessment';
import { functions } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  assessmentCollection: AngularFirestoreCollection<Assessment>;
  overview: Observable<Assessment[]>;

  constructor(public firestore: AngularFirestore) {
    this.overview = this.firestore.collection('Assessments').valueChanges({ idField: 'eventId' }) as unknown as Observable<Assessment[]>;
  }

  getAssessments(): Observable<Assessment[]> {
    return this.overview;
  }

  addAssessment(assessment: Assessment): void {
    this.firestore.collection('Assessments').add(assessment.toPlainObj());
  }

  deleteAssessment(data): unknown {
    return this.firestore
      .collection('Assessment')
      .doc(data.eventId)
      .delete();
  }
}
