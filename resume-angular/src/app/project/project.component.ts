import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from './project';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  names: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.names = firestore.collection('projects').valueChanges();
  }

  

  ngOnInit(): void {
  }

}
