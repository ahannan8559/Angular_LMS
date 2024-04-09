import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    [provideRouter(routes)],
    provideHttpClient()
  ]
})
