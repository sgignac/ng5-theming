import { ThemeSetupService } from './services/theme-setup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  loaded = false;

  constructor(private _themeSetupService:ThemeSetupService){
  }

  ngOnInit(){
    window.document.getElementsByTagName('body')[0].classList.remove('themed')
  }

}
