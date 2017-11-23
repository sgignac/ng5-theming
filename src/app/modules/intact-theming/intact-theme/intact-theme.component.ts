import { ThemeService } from './../../../services/theme.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme',
  template: ''
})
export class ThemeComponent implements OnInit {

  constructor(private _theme: ThemeService , private renderer: Renderer2) { }

  ngOnInit() {
    var theme = this._theme.getTheme();
    this.renderer.setAttribute(document.getElementsByTagName('html')[0], 'app-theme', theme);
  }

}
