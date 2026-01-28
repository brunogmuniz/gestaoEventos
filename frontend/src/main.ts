import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';

import { NbThemeModule, NbLayoutModule, NbIconModule } from '@nebular/theme';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    ...(NbThemeModule.forRoot({ name: 'default' }).providers || []),
    NbLayoutModule,
    NbIconModule
  ]
})
  .catch(err => console.error(err));
