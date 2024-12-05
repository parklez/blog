import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-special-message',
    templateUrl: './special-message.component.html',
    styleUrl: './special-message.component.css',
    standalone: false
})
export class SpecialMessageComponent {

  @Input({ required: true }) message!: string;
}
