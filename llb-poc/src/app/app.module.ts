import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { GaugeModule } from 'angular-gauge';
import { GaugesModule } from 'ng-canvas-gauges/src';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

//services
import {LlbService} from './service/llb.service';
import {RestService} from './service/rest.service';
import {LoaderService} from './service/loader.service';

//app
import { AppComponent } from './app.component';

//desktop
import { MenuComponent } from './desktop/menu/menu.component';
import { HomeComponent } from './desktop/home/home.component';
import { ModalComponent } from './desktop/modal/modal.component';
//mobile
import { MobileMenuComponent } from './mobile/mobile-menu/mobile-menu.component';

//data-components
import { LocationDataComponent } from './data-components/location-data/location-data.component';
import { GeneralDataComponent } from './data-components/general-data/general-data.component';
import { SensorDataComponent } from './data-components/sensor-data/sensor-data.component';
import { MovementDataComponent } from './data-components/movement-data/movement-data.component';
import { BusDataComponent } from './data-components/bus-data/bus-data.component';
import { EngineDataComponent } from './data-components/engine-data/engine-data.component';
import { BatteryDataComponent } from './data-components/battery-data/battery-data.component';
//other components
import { InfoComponent } from './other-components/info/info.component';
import { LoaderComponent } from './other-components/loader/loader.component';
import { RawDataComponent } from './other-components/raw-data/raw-data.component';

//charts
import { LinechartComponent } from './charts/linechart/linechart.component';
import { PedalChartComponent } from './charts/pedal-chart/pedal-chart.component';
import { BatteryChartComponent } from './charts/battery-chart/battery-chart.component';
import { TempChartComponent } from './charts/temp-chart/temp-chart.component';
import { RadialGaugeComponent } from './charts/radial-gauge/radial-gauge.component';
import { RpmGaugeComponent } from './charts/rpm-gauge/rpm-gauge.component';
import { CompassComponent } from './charts/compass/compass.component';
import { OutTempChartComponent } from './charts/out-temp-chart/out-temp-chart.component';
import { SlipGaugeComponent } from './charts/slip-gauge/slip-gauge.component';
//n-a-charts
import { NAComponent } from './charts/na-charts/n-a/n-a.component';
import { NAChartComponent } from './charts/na-charts/n-a-chart/n-a-chart.component';
import { NAGaugeComponent } from './charts/na-charts/n-a-gauge/n-a-gauge.component';
import { NaTempComponent } from './charts/na-charts/na-temp/na-temp.component';
import { FeedbackComponent } from './other-components/feedback/feedback.component';


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
    TempChartComponent,
    RadialGaugeComponent,
    RpmGaugeComponent,
    CompassComponent,
    OutTempChartComponent,
    NAGaugeComponent,
    RawDataComponent,
    NaTempComponent,
    SlipGaugeComponent,
    FeedbackComponent
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
    GaugesModule,
    SlideMenuModule
  ],
  providers: [LlbService, RestService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
