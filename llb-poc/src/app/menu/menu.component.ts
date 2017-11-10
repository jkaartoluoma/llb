import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';
import {MENUBUTTONS} from './mock-menubuttons';
import {MenuButton} from './menubutton';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  MenuButtons = MENUBUTTONS;
  selectedMenu: MenuButton;
  constructor(public llbService: LlbService, public loader: LoaderService) {

  }

  ngOnInit() {
<<<<<<< HEAD
=======

  }

  start(): void {
    this.llbService.start();
    this.llbService.vehicleId = 1612;
>>>>>>> f6db32b4b103ae5264a2094cbba6990d3b8f1315
  }

  onSelect(menubutton: MenuButton): void {
    this.selectedMenu = menubutton;
  }
}
