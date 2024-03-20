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
    const category = this.project.category
    if (category) {
      this.project.category = category[0].toUpperCase() + category.slice(1)
    }
  }

  getCategory(): string {
    switch(this.project.category.toLowerCase()) {
      case 'game':
        return 'Game 🎮'
      case 'music':
        return 'Music 🎧'
      case 'art':
        return 'Art 🎨'
      case 'software':
        return 'Software 💻'
      case 'tool':
        return 'Tool 🛠️'
      default:
        return 'Other'
    }
  }

  getColor(): string {
    switch (this.project.category.toLowerCase()) {
      case 'game':
        return '#aaff71'
      case 'music':
        return '#baf5ff'
      case 'art':
        return '#ffbaba'
      case 'software':
        return '#ffe8bc'
      case 'tool':
        return '#ffffff'
      default:
        return 'orange'
    }
  }
}
