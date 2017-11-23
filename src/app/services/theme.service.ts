import { IThemeConfig } from './../modules/intact-theming/i-theme-config';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  // Default configuration
  configs: IThemeConfig;

  constructor() { }

  /**
   * setConfig : Set the theme configuration for the service
   * 
   * @param {IThemeConfig} conf 
   * @memberof ThemeService
   */
  setConfig(conf:IThemeConfig):void{
    this.configs = conf;
  }

  /**
   * getTheme : Return the theme founded based on the configuration
   * 
   * @returns {string} 
   * @memberof ThemeService
   */
  getTheme(): string{
    
    let theme: string = "";

    if (window.location.host.includes('localhost')) {
      if (window.location.search.includes('theme=')) {
        theme = this.getUrlParam("theme");
      }
      else {
        theme = this.searchForTheme();
      }
    }
    else {
      theme = this.searchForTheme();
    }

    return theme;
  }

  /**
   * searchForTheme: test the configuration to find the theme
   * 
   * @private
   * @returns 
   * @memberof ThemeService
   */
  private searchForTheme(){

    let theme:string = "";
    for(let i = 0; i < this.configs.tests.length; i++){
      let k:string = window.location.host.toLowerCase();
      let pattern = new RegExp(this.configs.tests[i].test);
      if (pattern.test(k)) {
        theme = this.configs.tests[i].theme;
        break;
      }
    }
    return theme;
  }

  private getUrlParam(key:string): string {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  
}
