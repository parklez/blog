import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  static: boolean = !environment?.static

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.auth.loadSession();
  }
}
