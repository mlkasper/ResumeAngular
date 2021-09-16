import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { environment } from 'src/environments/environment';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HeaderComponent } from './header/header.component';

//import { AngularFireModule } from '@angular/fire'; 
//import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ComingSoonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    MatIconModule, 
    MatToolbarModule, 
    BrowserAnimationsModule, 
    //AngularFireModule.initializeApp(environment.firebase), 
    //AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
