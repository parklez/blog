import { Component, OnInit } from '@angular/core';
import { Project } from '../project-template/project-template.component';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
  hardcodedProjects: Project[] = [
    {
      title: 'ParkyBot',
      description: 'Twitch chat-bot that is completely open and easy to use.',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
    {
      title: 'My bloog',
      description: 'My first Angular project after a 45-hour long course.',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
    {
      title: 'Pygame',
      description: 'Random small games I tried to make.',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
    {
      title: 'Videos',
      description: 'Tutorials, Speedruns, trips and alike',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
    {
      title: 'Lorem',
      description: 'lorem ipsum bla bla latim filler text bottom text',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
    {
      title: 'Lorem',
      description: 'lorem ipsum bla bla latim filler text bottom text',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
    {
      title: 'Lorem',
      description: 'lorem ipsum bla bla latim filler text bottom text',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
    {
      title: 'Lorem',
      description: 'lorem ipsum bla bla latim filler text bottom text',
      thumbnail: 'https://bulma.io/images/placeholders/640x480.png',
    },
  ];

  // I'm attempting to create a new column, every 3 "Project"s,
  // So I'll be splitting into arrays of 3 of them.
  sliceIntoChunks(array: Project[], size = 3): Project[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  };

  // An array, containing Project arrays.
  projects: Project[][];

  constructor () {
    this.projects = this.sliceIntoChunks(this.hardcodedProjects);
  }

  ngOnInit(): void {}
}
