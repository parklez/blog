import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Pipe({
    name: 'markdown',
    standalone: false
})
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  
  transform(value: string, ...args: unknown[]): SafeHtml {
    if (value && value.length > 0) {
      return this.sanitizer.bypassSecurityTrustHtml(marked(value));
    }
    return value;
  }

}
