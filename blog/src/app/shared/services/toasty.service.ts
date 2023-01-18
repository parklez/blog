import { Injectable } from '@angular/core';

export class ToastyMessage {
  id: number = 0;
  content: string;
  style: string;

  constructor(id: number, content: string, style?: string) {
    this.id = id;
    this.content = content;
    this.style = style || 'info'
  }

}

@Injectable({
  providedIn: 'root'
})
export class ToastyService {

  messagesArray: ToastyMessage[] = [];
  i = 0;

  constructor() { }

  pushNewToasty(message: string, style?: string): void {
    const newToasty = new ToastyMessage(this.i, message, style)
    this.messagesArray.push(newToasty);
    this.i += 1;
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
