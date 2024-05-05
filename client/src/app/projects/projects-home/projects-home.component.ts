import { Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Project, Projects } from '../../shared/models/project';
import { ProjectsService } from '../../shared/services/projects.service';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css'],
})
export class ProjectsHomeComponent implements OnInit {

  games: {game: string, ranks: []}[] = []
  ranks: [] = [];
  @ViewChild('game') game!: ElementRef;
  @ViewChild('rank') rank!: ElementRef;
  selectdRank: string = ''
  selectedGame: string = ''
  players: { firstname: string; username: string; game: string; rank: string; }[] = [];

  constructor(
    private projservice: ProjectsService,
    private toast: ToastyService
  ) {}

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

  onChangeGame(event: any): void {
    this.selectedGame = this.game.nativeElement.value;
    console.log(this.selectedGame)
    const game = this.games.find(game => game.game === event.target.value);
    this.ranks = game ? game.ranks : [];
  }

  onChangeRank(event: any): void {
    this.selectdRank = event.target.value
    console.log(event.target.value)
  }

  searchPlayers(): void {
    console.log(this.selectedGame, this.selectdRank)
    this.projservice.fetchPlayersByRank(this.selectedGame, this.selectdRank).subscribe(
      {
        next: (players) => {
          this.players = players
          console.log(this.players)
          if (this.players.length === 0) {
            this.toast.pushNewToasty('No players found');
          }
        },
        error: (err) => {
          this.toast.pushNewToasty('Error while fetching players');
        }
      }
    )
  }
}
