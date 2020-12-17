import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { MonsterListComponent, PlantTimelineComponent, WebcamComponent, MonsterTreeComponent, StreamComponent, HeroListComponent, PygameComponent } from './';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'herolist', component: HeroListComponent },
      { path: 'monsterlist', component: MonsterListComponent },
      { path: 'monstertree', component: MonsterTreeComponent },
      { path: 'plant', component: PlantTimelineComponent },
      { path: 'webcam', component: WebcamComponent },
      { path: 'stream', component: StreamComponent },
      { path: 'pygame', component: PygameComponent },    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
