import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LlbService} from './service/llb.service';
import {RestService} from './service/rest.service';
import {LoaderService} from './service/loader.service';
import { MenuComponent } from './menu/menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { LocationDataComponent } from './location-data/location-data.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component';
import { MovementDataComponent } from './movement-data/movement-data.component';

import { ChartsModule } from 'ng2-charts';
import { LinechartComponent } from './linechart/linechart.component';
import { AgmCoreModule } from '@agm/core';
import { BusDataComponent } from './bus-data/bus-data.component';
import { EngineDataComponent } from './engine-data/engine-data.component';
import { BatteryDataComponent } from './battery-data/battery-data.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { PedalChartComponent } from './pedal-chart/pedal-chart.component';
import { NAComponent } from './n-a/n-a.component';
import {LoaderComponent} from './loader/loader.component';
import { BatteryChartComponent } from './battery-chart/battery-chart.component';
import { InfoComponent } from './info/info.component';
import { NAChartComponent } from './n-a-chart/n-a-chart.component';
import { GaugeModule } from 'angular-gauge';
import {GaugesModule} from 'ng-canvas-gauges/lib';
import { TempChartComponent } from './temp-chart/temp-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    MenuComponent,
    MobileMenuComponent,
    LocationDataComponent,
    GeneralDataComponent,
    SensorDataComponent,
    MovementDataComponent,
    BusDataComponent,
    EngineDataComponent,
    BatteryDataComponent,
    ModalComponent,
    HomeComponent,
    PedalChartComponent,
    NAComponent,
    LoaderComponent,
    BatteryChartComponent,
    InfoComponent,
    NAChartComponent,
    TempChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBd3tmzegmPCnjxAuIHOF9ZNcGytvCL24E'
    }),
    GaugeModule.forRoot(),
    GaugesModule
  ],
  providers: [LlbService, RestService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
