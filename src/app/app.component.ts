import { Component } from '@angular/core';
import { environment } from 'src/environments/mercado/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'white-label';
  env = environment
}
