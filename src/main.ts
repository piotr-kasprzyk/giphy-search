import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { GiphySearchAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(GiphySearchAppComponent, [HTTP_PROVIDERS]);