import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
import { Project } from './project/project';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-angular';

  constructor() { 
    //do something
  }

}
