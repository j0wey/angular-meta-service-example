import { Component, Input } from '@angular/core';
import { Title, Meta }     from '@angular/platform-browser';

@Component({
  selector: 'hello',
  template: `
  <p>{{name}}</p>
  <br/>
  <a routerLink="/">Navigate back to App Component</a>
  `,
  styles: [`* { font-family: Lato; }`]
})
export class HelloComponent  {
  name: string = 'Hello Component';

    constructor(private titleService: Title, private metaService: Meta) {
      // title example
      this.titleService.setTitle( 'Hello Component HERE :)' );
      // meta example
      this.metaService.updateTag({name: 'description', content: 'Some description of HELLO Component'});
  }
}
