import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.css']
})
export class ProjectTemplateComponent implements OnInit {

  @Input('title') title = ''; 
  @Input('description') description = ''; 
  @Input('thumbnail') thumbnail = ''; 

  constructor() {
   }

  ngOnInit(): void {
  }

}
