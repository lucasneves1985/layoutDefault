import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

import { QuillModule } from 'ngx-quill'

import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,

    QuillModule.forRoot(),
    FormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
