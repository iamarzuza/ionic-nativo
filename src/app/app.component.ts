import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;

  pages : Array<any>;

  constructor(platform: Platform, public menu: MenuController) {

    this.pages  = [
        { titulo: "Home", componente : HomePage, },
        { titulo: "Home", componente : HomePage, }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage( p ) {
      this.menu.close();
      this.rootPage = p.componente;
  }

}
