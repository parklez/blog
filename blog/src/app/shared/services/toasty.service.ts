import { Injectable } from '@angular/core';

export class ToastyMessage {
  id: number = 0;
  content: string;
  style: string;
  vanish: number;

  constructor(id: number, content: string, style?: string, vanishInSeconds?: number) {
    this.id = id;
    this.content = content;
    this.style = style || 'is-light is-info'
    this.vanish = vanishInSeconds || 0
  }

}

@Injectable({
  providedIn: 'root'
})
export class ToastyService {

  messagesArray: ToastyMessage[] = [];
  i = 0;

  constructor() { }

  /**
   * 
   * @param message The string to be displayed.
   * @param style See https://bulma.io/documentation/overview/colors/, default: 'is-light is-info'.
   * @param vanishInSeconds time in seconds for vanishing, default: 0 (never).
   */
  pushNewToasty(message: string, style?: string, vanishInSeconds?: number): void {
    const newToasty = new ToastyMessage(this.i, message, style)
    this.messagesArray.push(newToasty);
    this.i += 1;
    if (vanishInSeconds && vanishInSeconds > 0) {
      setTimeout(() => {
        this.dismissToasty(newToasty.id)
      }, vanishInSeconds*1000)
    }
  }

  fetchAllToasties(): ToastyMessage[] {
    return this.messagesArray;
  }

  dismissToasty(toastyId: number): void{
    const position = this.messagesArray.findIndex((element) => {
      return element.id == toastyId
    })
    if (position != -1) {
      this.messagesArray.splice(position, 1)
    }
  }

}
