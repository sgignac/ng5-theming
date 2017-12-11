import { ScriptStore } from './../ScriptStore';
import { Injectable } from '@angular/core';
import { IThemeConfig } from '../modules/intact-theming/i-theme-config';

declare var document: any;

@Injectable()
export class ThemeSetupService {

  themeConfig:IThemeConfig = {
    acceptedThemes: ['belair', 'intact', 'bna'],
    tests: [
      { test: "^(?=.*belair)(?=.*\/cc).*$", theme: 'theme_belair' },
      { test: "^(?=.*localhost:4200).*$", theme: "theme_belair" },
      { test: "^(?=.*intact)(?=.*\/cc).*$", theme: "theme_intact" },
      { test: "^(?=.*localhost:4201).*$", theme: "theme_intact" },
      { test: "^(?=.*nbc-|.*-bna)(?=.*\/cc).*$", theme: "theme_bna" },
      { test: "^(?=.*localhost:4202).*$", theme: "theme_bna" },
      { test: "$", theme: "theme_belair" } //fallback
    ]
  }; 

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }
  
  load() {
    let url:string = window.location.href;
    this.themeConfig.tests.forEach((test) => {
      let regexp = new RegExp(test.test);
      let res = regexp.test(url);
      if (res) {
        return this.loadTheme(test.theme);
      }
    })
  }

  loadTheme(...scripts: string[]){
    var promises: any[] = [];
    scripts.forEach((script) => {
      promises.push(this.loadScript(script))
    });
    return Promise.all(promises);
  }


  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
      else {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }



}


