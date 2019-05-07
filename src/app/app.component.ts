import { Component } from '@angular/core';
import { Title, Meta }     from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = 'App Component';

  constructor(
    private metaService: Meta,
    private titleService: Title, 
    private router: Router 
    ) {
      // title example - for components that don't get destroyed, check for each navigation event if the title has to be changed
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event) => {   
         if (this.router.isActive('/', true)) {
            // title example
            this.titleService.setTitle( 'App Component HERE :)' );

            /*
             meta example
             Not realy usefull as the description should be set by the component that holds the actual content and not a wrapper parent component,
             but this is an example that you might have to care if a tag already exists. Otherwise navigating through the application will 
             duplicate the tag.
            */
            if (!!this.metaService.getTag('name="description"')) {
               this.metaService.updateTag({name: 'description', content: 'Some description of APP Component'});     
            } else {
              this.metaService.addTag({name: 'description', content: 'Some description of APP Component'});     
            }
         }
      });

      // meta example (static)
      this.metaService.addTag({charset: 'utf-8'});       
      this.metaService.addTag({name: 'mytag', content: 'my tag value'});
  }
}
