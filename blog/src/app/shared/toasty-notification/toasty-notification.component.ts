import { Component, OnInit } from '@angular/core';
import { ToastyMessage, ToastyService } from '../services/toasty.service';

@Component({
    selector: 'app-toasty-notification',
    templateUrl: './toasty-notification.component.html',
    styleUrls: ['./toasty-notification.component.css'],
    standalone: false
})
export class ToastyNotificationComponent implements OnInit {

  constructor(private toast: ToastyService) { }

  messages: ToastyMessage[] = [];

  ngOnInit(): void {
    // Whenever a new token is pushed to the array inside the service class,
    // There is no need to update this component's array because they're refenced
    // the same in memory.
    this.messages = this.toast.fetchAllToasties();
  }

  dismiss(toastyId: number): void {
    // For the future, an observable would be better(?)
    this.toast.dismissToasty(toastyId);
  }

}
