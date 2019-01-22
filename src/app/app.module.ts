import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DrumMachineComponent } from './drum-machine/drum-machine.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DrumMachineComponent,
    VisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
