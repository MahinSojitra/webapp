import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  icons = [
    { class: 'bi bi-code-slash', animation: 'animate-bounce' },
    { class: 'bi bi-lightning-charge-fill', animation: 'animate-pulse' },
    { class: 'bi bi-box-seam', animation: 'animate-zoom' },
    { class: 'bi bi-terminal-fill', animation: 'animate-rotate' },
    { class: 'bi bi-cpu-fill', animation: 'animate-fade' }
  ];
  currentIcon = this.icons[0];
  index = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.icons.length;
      this.currentIcon = this.icons[this.index];
    }, 1500);
  }
}
