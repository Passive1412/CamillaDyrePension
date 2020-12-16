// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// AgGrid Modules
import { AgGridModule } from '@ag-grid-community/angular';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Environment
import { environment } from 'src/environments/environment';

// NG Modules
import {
  NgbDateAdapter,
  NgbDateNativeUTCAdapter,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

// Core Modules

// Page Modules
import { HomeComponent, NotFoundComponent } from './pages/danish/';
import { HeaderComponent } from './pages/danish/header/header.component';
import { NavigationComponent } from './pages/danish/navigation/navigation.component';
import { BannerComponent } from './pages/danish/banner/banner.component';
import { FooterComponent } from './core/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, HeaderComponent, NavigationComponent, BannerComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: environment.errorHandler },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter },

    //CanActivateGuardService
    //Authservice
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
