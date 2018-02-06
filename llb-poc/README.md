
# Documentation for LLB-data visualization application.

## Table of contents

- [How to run](#how-to-run)<br>
- [Dev guidelines](#developer-guidelines)<br>
- [Structure](#structure)<br>
- [Api](#api)<br>
- [How to use and create charts](#how-to-use-and-create-charts)<br>
- [How to use test data](#how-to-use-test-data)<br>
- [tl;dr](#tl-dr)



## Application
Applications purpose is to show users and developers what kind of data, is available from the buses through rest-api.
Our goal has been to visualized the data, so that users get some idea how to use the data. App provides different kind of charts and gauges to deliver.
Application is web-based and the main technology is angular 4.0.0

If you're not familiar with Angular 2 (v. 4.0.0) we recommend you to take tutorial at: https://angular.io/tutorial

---

### How to run:
Requirements for running the application in dev environment:
#### 1. Required tools
- angular-cli (https://github.com/angular/angular-cli)
- nodejs (https://docs.npmjs.com/getting-started/installing-node)

#### 2. Clone repo:
- `git clone https://akselip@bitbucket.org/kaj_torrkulla/llb.git`


### Running application inside development kit:
#### 1. Run development-kit
- `cd development-kit`
- (`npm install`) --- You must use the "npm install" command at the first time to install all the dependencies.
- `npm start`

#### 2. Run angular app
- `cd llb-poc`
- `ng build --watch`


### Running application without development kit:
#### 1. Run angular app
- `cd llb-poc`
- `ng serve`

The application should be running at: 127.0.0.1:4200

### Circumventing CORS:
- On firefox, install "Cors everywhere" -plugin
- On chrome, run chrome with following command (note: kill all open chrome processes first): 
  - Windows: chromium-browser --disable-web-security --user-data-dir
  - Os.X: open -a Google\ Chrome --args --disable-web-security --user-data-dir
  - Linux: google-chrome --disable-web-security

---

## Developer guidelines
 
#### 1. Use angular-cli to generate classes:
- Component: `ng generate component [name]`
- Service: `ng generate service [name]`
- etc.
- Read: https://github.com/angular/angular-cli#usage

#### 2. Use correct directory structure
- Components should be in their own directory, under "component" -root directory
- Services should be under "service" -directory
- Chart-components should be under “charts” -directory
- All components that display data, should be under “data-components” directory.
- Components that handle desktop and mobile view, can be found in their own directories “mobile” and “desktop”
- Secondary components (ex. raw-data), should be under “other-components” -directory
- All images should be under “./assets/img/” -directory



---

## Structure
├───app<br>
│   ├───charts<br>
│   │   ├───battery-chart<br>
│   │   ├───compass<br>
│   │   ├───linechart<br>
│   │   ├───na-charts<br>
│   │   │   ├───n-a<br>
│   │   │   ├───n-a-chart<br>
│   │   │   ├───n-a-gauge<br>
│   │   │   └───na-temp<br>
│   │   ├───out-temp-chart<br>
│   │   ├───pedal-chart<br>
│   │   ├───radial-gauge<br>
│   │   ├───rpm-gauge<br>
│   │   ├───slip-gauge<br>
│   │   └───temp-chart<br>
│   ├───data-components<br>
│   │   ├───battery-data<br>
│   │   ├───bus-data<br>
│   │   ├───engine-data<br>
│   │   ├───general-data<br>
│   │   ├───location-data<br>
│   │   ├───movement-data<br>
│   │   └───sensor-data<br>
│   ├───desktop<br>
│   │   ├───home<br>
│   │   ├───menu<br>
│   │   └───modal<br>
│   ├───mobile<br>
│   │   └───mobile-menu<br>
│   ├───other-components<br>
│   │   ├───feedback<br>
│   │   ├───info<br>
│   │   ├───loader<br>
│   │   └───raw-data<br>
│   └───service<br>
│       └───model<br>
├───assets<br>
│   └───img<br>
└───environments



### App component
App component handles showing the menu components (desktop and mobile). Mobile is used if clients device screen width is below 900px. 

### Desktop 
The desktop directory holds home, menu and modal -component. 

- Home -component handles showing the modal windows where the data components are displayed. It also show few visualizations and works as landing page for application.

- Menu -component handles navigation bar buttons.

- Modal -component handles modal window logic.

### Mobile
Under mobile directory, you can find mobile-menu component, which handles the menu in mobile view.

### Environment
From environment.ts you can find api key and api url.

### Service
llb.service.ts handles get request and fetches the data from the rest. It also maps the data by implementing ./model/VehicleData.ts interface.

---

## Api
The rest api is provided by [VTT](http://livinglabbus.fi/). Updates at 1hz frequency and provides all the data from the bus.
App first maps the data. After mapping, the data is usable by calling the mapped variable. Example of mapped variables: llbService.data[0].spd (speed) and for can-data: llbService.data[0].can?.DD_BatteryLevel.
ApiUrl  and apiKeyis located ./service/llb.service.ts

---

## How to use and create charts
Example from battery-data component:
```javascript
  <div class="container"> <!-- MIT battery chart -->
    <n-a-chart *ngIf="isNullOrUndefined(llbService.data[0]?.can?.DD_BatteryLevel)"></n-a-chart>
    <ng-container *ngIf="!isNullOrUndefined(llbService.data[0]?.can?.DD_BatteryLevel)">
     <app-battery-chart [data]="llbService.data[0]?.can?.DD_BatteryLevel" [name]="Battery"></app-battery-chart>
   <!-- <li><span>Battery level (%): {{llbService.data[0]?.can?.DD_BatteryLevel}}</span></li> -->
    <!-- //Resolution 0.4% -->
  </ng-container>
  </div>
```
- All the displayed data should be checked with:
```javascript
	isNullOrUndefined([data])
```
function checks if the bus is not giving the data. If there is no data coming the function returns true, and then the n/a -data should be handled by showing n-a-component. There is currently four different n-a-components:
- “n-a” for text visualization
- “n-a-chart” for chart visualization
- “n-a-gauge” for gauge visualization
- “n-a-temp” for temp-meter visualization

If the bus is sending data, then the real visualization is showed in the example battery-chart -component. To use the chart you have to give it the data what you want it to show, here we’re giving battery-chart the name “Battery” and battery level data from the bus:
<app-battery-chart [data]="llbService.data[0]?.can?.DD_BatteryLevel" [name]="Battery"></app-battery-chart>

The battery-chart -component then uses the data to draw the chart (in battery-chart.component.ts):
```javascript
draw() {
    const charge = this.data;
    //https://github.com/bencevans/canvas-battery
    // Canvas
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    
    //Battery outlines
    this.context.beginPath();
    this.context.rect(5, 5, 180, 90);
    this.context.lineWidth = 10;
    this.context.strokeStyle = 'black';
    this.context.stroke();

    this.context.beginPath();
    this.context.rect(190, 40, 10, 20);
    this.context.fillStyle = 'black';
    this.context.fill();
    this.context.stroke();

    //Battery fill
    this.context.beginPath();
    this.context.rect(10, 10, 170 * (charge/100), 80);
    this.context.fillStyle = 'rgb('+ Math.floor((1-(charge/100))*255) + ',' + Math.floor((charge/100)*255) + ',0)';
    this.context.fill();
    
    //Number
    this.context.font = '3em Arial';
    this.context.fillStyle = 'black';
    this.context.fillText(Math.round(this.data) + "%", 70, 60);
  }
```
For creating new charts, you can use the existing ones if they suit the data you’re visualizing or you can create own by creating a new component and for example implementing something from ng-gauges-charts what is being used in many of the applications gauges. https://canvas-gauges.com/

---

### How to use test data
#### TestData server for LLB applications.

- Server mimics a live llb rest server, and returns valid bus data.

- Returned data ALWAYS has a busId 666, regardless which bus was recorder. Timestamp is also always fresh.

- Prebuilt application and recorded data file can be found in ./jar directory.

#### Requirements
- JRE8

#### Build server:
1. `gradlew build`

2. Jar will be built into following location: ./build/libs/

#### Run server:
1. `java -jar testdata-0.0.1-SNAPSHOT.jar [optional testdata filename]`

  - If no arguments is provided, a valid datafile is expected to be found from ./testdata.dat

#### Run in record mode:
1. `java -jar testdata-0.0.1-SNAPSHOT.jar record [busid] [output file name]`

  - Example: java -jar testdata-0.0.1-SNAPSHOT.jar record 9999 "output.dat"

---

### tl;dr

#### Build app
- `ng build`

#### Run in dev mode
- `ng serve`

#### Change api key & url
- See environment.ts

---

### Info & Licenses


App made by: Kaj Torrkulla, Toni Linnusmäki, Valtteri Pohjola, Akseli Piilola, Tuomas Kaartoluoma and Joonas Kaartoluoma
### Licenses

##### Compass icon

Icons made by [Pixel buddha](https://www.flaticon.com/authors/pixel-buddha) from https://www.flaticon.com/ is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

##### ramp icon, n-a-chart component na-icon in img nacharts.png

Icons made by [Freepik](http://www.freepik.com) from https://www.flaticon.com/  is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

#### Battery Canvas
[Canvas Battery Charge Gauge](https://github.com/bencevans/canvas-battery) is licensed by MIT
	
##### ng-gauges
The MIT License (MIT) Copyright (c) 2016 Mykhailo Stadnyk mikhus@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br>
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
