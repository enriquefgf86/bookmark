import { PipeimgModule } from './pipes/pipeimg.module';
import { BookmarkEffects } from './ngrx/effects/bookmark.effects';
import { ModalsModule } from './modals/modals.module';
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component';
import { MenuAdminModule } from './pages/menu-admin/menu-admin.module';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { globalReducer } from './globalReducer.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { Tab1Module } from './pages/tab1/tab1.module';
import { Tab2Module } from './pages/tab2/tab2.module';
import { MenuAdminHomeComponent } from './pages/menu-admin/menu-admin-home/menu-admin-home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { globalReducer } from './globalReducer';
import { EffectsModule } from '@ngrx/effects';
import { PipeimgPipe } from './pipes/pipeimg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // PipeimgPipe,
    // MenuAdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PipeimgModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    ComponentsModule,
    MenuAdminModule,
    Tab1Module,
    Tab2Module,
    MatSelectModule,
    StoreModule.forRoot(globalReducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([BookmarkEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  // providers: [{ provide: RouteReuseStrategy }],

  bootstrap: [AppComponent],
})
export class AppModule {}
