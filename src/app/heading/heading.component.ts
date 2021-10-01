import { Component, OnInit } from '@angular/core';
import { Heading } from '@app/model/heading';
import { IAltHeading } from '@app/model/altheading';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  heading = new Heading();
  
  constructor() { }

  ngOnInit() {
  }

}
