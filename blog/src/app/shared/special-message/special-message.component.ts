import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-special-message',
  templateUrl: './special-message.component.html',
  styleUrl: './special-message.component.css'
})
export class SpecialMessageComponent {

  messagePos: number = 0;

  @Input() message: string = ""
  
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const width = this.element.nativeElement.firstElementChild.scrollWidth

    interval(10).subscribe(_ => {
      this.messagePos += 1;
      if (width < this.messagePos) {
        this.messagePos = -20;
        console.log('Resetting scrollable text')
      }
      this.renderer.setStyle(this.element.nativeElement.firstElementChild.firstChild, 'right',`${this.messagePos}px`)
    });
  }
}
