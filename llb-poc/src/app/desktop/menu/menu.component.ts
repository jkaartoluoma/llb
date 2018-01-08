import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';
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
    this.selectedMenu = MENUBUTTONS[0];
  }

  onSelect(menubutton: MenuButton): void {
    this.selectedMenu = menubutton;
	
  }
}
