import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LlbService} from './service/llb.service';
import {RestService} from './service/rest.service';
import {LoaderService} from './service/loader.service';
import { MenuComponent } from './menu/menu.component';
import { LocationDataComponent } from './location-data/location-data.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component';
import { MovementDataComponent } from './movement-data/movement-data.component';
<<<<<<< HEAD

import { ChartsModule } from 'ng2-charts';
import { LinechartComponent } from './linechart/linechart.component';
import { AgmCoreModule } from '@agm/core';
=======
>>>>>>> f6db32b4b103ae5264a2094cbba6990d3b8f1315

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LinechartComponent,
=======
>>>>>>> f6db32b4b103ae5264a2094cbba6990d3b8f1315
    MenuComponent,
    LocationDataComponent,
    GeneralDataComponent,
    SensorDataComponent,
    MovementDataComponent
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
