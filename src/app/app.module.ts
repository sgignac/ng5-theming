import { ThemeComponent } from './modules/intact-theming/intact-theme/intact-theme.component';
import { TestBed } from '@angular/core/testing';
import { IThemeConfig } from './modules/intact-theming/i-theme-config';
import { IntactThemingModule } from './modules/intact-theming/intact-theming.module';
import { ThemeService } from './services/theme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemeSetupService } from './services/theme-setup.service';
import { HttpClientModule } from '@angular/common/http';


let themeConfig:IThemeConfig = {
  acceptedThemes: ['belair', 'intact', 'bna'],
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

export function themeSetupServiceFactory(themeSetupService: ThemeSetupService): Function {
  return () => themeSetupService.load();
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IntactThemingModule
  ],
  providers: [
    ThemeSetupService,
    {
      provide: APP_INITIALIZER,
      useFactory: themeSetupServiceFactory,
      deps: [ThemeSetupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(){

  }

}
