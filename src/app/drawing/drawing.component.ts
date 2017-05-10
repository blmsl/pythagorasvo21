import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SketchpadComponent } from '../sketchpad/components/sketchpad/sketchpad.component';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { DrawingService } from '../services/drawing-service.service';
import { TopicService } from '../services/topic-service.service';
import {Topic, Drawing} from '../model';
// import { AngularFire, FirebaseRef } from 'angularfire2';

import * as firebase from 'firebase';
@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  @ViewChild('sketchpad') sketchpad: SketchpadComponent;

  public imageName: string;
  private image: string;
  private ref: firebase.storage.Reference;

  constructor(private drawingService: DrawingService, private topicService: TopicService) {
    //dont remove, will break drawing-service;
    console.log(firebase.storage());

  }

  ngOnInit() {
  }

  clicked($event) {
    let topic: FirebaseObjectObservable<Topic> = this.topicService.findTopicAfterKey("mytesttopic")
    this.drawingService.submitNewDrawing(this.sketchpad.canvas, topic, null);

  }
}

