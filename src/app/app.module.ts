import { ThemeComponent } from './modules/intact-theming/intact-theme/intact-theme.component';
import { TestBed } from '@angular/core/testing';
import { IThemeConfig } from './modules/intact-theming/i-theme-config';
import { IntactThemingModule } from './modules/intact-theming/intact-theming.module';
import { ThemeService } from './services/theme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


let themeConfig:IThemeConfig = {
  acceptedThemes: ['belair', 'intact'],
  tests: [
    { test: "^(?=.*belair)(?=.*\/cc).*$", theme: 'belair'},
    { test: "^(?=.*localhost:4200).*$", theme: "belair" },
    { test: "^(?=.*intact)(?=.*\/cc).*$", theme: "intact" },
    { test: "^(?=.*localhost:4201).*$", theme: "intact" },
    { test: "^(?=.*nbc-|.*-bna)(?=.*\/cc).*$", theme: "bna" },
    { test: "^(?=.*localhost:4202).*$", theme: "bna" },
    { test: "$", theme: "belair" }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    IntactThemingModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(private themeService: ThemeService){
    this.themeService.setConfig(themeConfig);
  }

}
