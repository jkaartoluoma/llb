import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';
import {MENUBUTTONS} from './mock-menubuttons';
import {MenuButton} from './menubutton';


@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  MenuButtons = MENUBUTTONS;
  selectedMenu: MenuButton;
  constructor(public llbService: LlbService, public loader: LoaderService) {

  }

  ngOnInit() {
    this.selectedMenu = MENUBUTTONS[0];
  }

  onSelect(menubutton: MenuButton): void {
    this.selectedMenu = menubutton;
  }
}
