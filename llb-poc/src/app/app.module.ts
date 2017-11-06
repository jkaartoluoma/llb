import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LlbService} from './service/llb.service';
import {RestService} from './service/rest.service';
import {LoaderService} from './service/loader.service';

import { ChartsModule } from 'ng2-charts';
import { LinechartComponent } from './linechart/linechart.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBd3tmzegmPCnjxAuIHOF9ZNcGytvCL24E'
    })
  ],
  providers: [LlbService, RestService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
