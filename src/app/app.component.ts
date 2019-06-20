import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW } from '@core/window.provider';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private readonly html: HTMLElement;
  private readonly body: HTMLElement;

  constructor(@Inject(WINDOW) private window: Window) {
    const { document } = this.window;
    this.html = document.documentElement;
    this.body = document.body;
  }

  ngOnInit() {
    this.html.classList.add('scrollbar-on');
    this.body.classList.add('sidebar-mini');
  }
}
