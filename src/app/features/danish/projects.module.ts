import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { WebcamModule } from 'ngx-webcam';

import { ProjectsRoutingModule } from './projects-routing,module';
import { LayoutComponent } from './layout.component';
import { MonsterListComponent, PlantTimelineComponent, WebcamComponent, MonsterTreeComponent, StreamComponent, HeroListComponent } from './';
import { ImageOpencvComponent } from './image-opencv/image-opencv.component';
import { PygameComponent } from './pygame/pygame.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ProjectsRoutingModule,
    AgGridModule.withComponents([]),
    WebcamModule,
  ],
  declarations: [
    LayoutComponent,
    MonsterListComponent,
    PlantTimelineComponent,
    WebcamComponent,
    MonsterTreeComponent,
    StreamComponent,
    HeroListComponent,
    ImageOpencvComponent,
    PygameComponent,
  ],
})
export class ProjectsModule { }

