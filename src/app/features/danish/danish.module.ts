import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DanishRoutingModule } from './danish-routing,module';
import { LayoutComponent } from './layout.component';
import { HomeComponent, NotFoundComponent } from '.';

import { BannerComponent } from '../../core/components/';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DanishRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    NotFoundComponent,
    BannerComponent,
  ],
})
export class DanishModule {}
