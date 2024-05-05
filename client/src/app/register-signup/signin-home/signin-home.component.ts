import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastyService } from '../../shared/services/toasty.service';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-signin-home',
  templateUrl: './signin-home.component.html',
  styleUrls: ['./signin-home.component.css']
})
export class SigninHomeComponent {

  games: {game: string, ranks: []}[] = []
  ranks: [] = [];

  signinForm = new UntypedFormGroup({
    "username": new UntypedFormControl(null, Validators.required),
    "firstname": new UntypedFormControl(null, Validators.required),
    "game": new UntypedFormControl(null, Validators.required),
    "rank": new UntypedFormControl(null, Validators.required),
    "password": new UntypedFormControl(null, Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
  });

  constructor(public auth: AuthenticationService,
              private router: Router,
              private projservice: ProjectsService,
              private toast: ToastyService) { }

  ngOnInit(): void {
    this.projservice.fetchGames().subscribe(
      {
        next: (games) => {
          this.games = games
          this.ranks = games[0].ranks
        },
        error: (err) => {
          this.toast.pushNewToasty('Error while fetching games');
        }
      }
    );
  }

  onSubmit(): void {
    console.log(this.signinForm.value)
    // Should the component handle an observable?
    this.auth
      .signUpUser(this.signinForm.value.username, this.signinForm.value.password, this.signinForm.value.firstname, this.signinForm.value.game, this.signinForm.value.rank)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.toast.pushNewToasty(
            error.error.error,
            'is-light is-danger'
          );
        }
      })
    this.signinForm.reset();
  }

  onChangeGame(event: any): void {
    console.log(event.target.value)
    const game = this.games.find(game => game.game === event.target.value);
    this.ranks = game ? game.ranks : [];
  }

}
