import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.css'
})

export class ProjectTemplateComponent implements OnInit{

  @Input() project: Project = {
    _id: '',
    title: '',
    category: 'Other',
    thumbnail: 'assets/640x360.png',
    description: '',
    published: new Date(),
    hidden: false,
    link: ''
  }

  ngOnInit(): void {
    console.log(this.project)
    const category = this.project.category
    if (category) {
      this.project.category = category[0].toUpperCase() + category.slice(1)
    }
  }

}
