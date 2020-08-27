import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    OverviewComponent,
    SidebarComponent,
    AssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
