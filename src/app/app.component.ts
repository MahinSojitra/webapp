import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }
}
