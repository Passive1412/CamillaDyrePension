import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {  } from './core';

// import { AuthGuard } from './core/guards';
// import { Role } from './core/models';

const danishModule = () =>
  import('./features/danish/danish.module').then((x) => x.DanishModule);

// const englishModule = () =>
  // import('./features/english/english.module').then((x) => x.EnglishModule);

// import { HomeComponent, NotFoundComponent } from './features/danish';

const routes: Routes = [
  // { path: '', redirectTo: 'da' },
  // { path: '*', redirectTo: 'da' },
  // { path: '**', component: NotFoundComponent },

  { path: 'da', loadChildren: danishModule },
  // { path: 'en', loadChildren: danishModule },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // onSameUrlNavigation: 'reload',
      // useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
