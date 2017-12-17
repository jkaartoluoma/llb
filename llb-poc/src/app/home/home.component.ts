import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import { ModalComponent } from 'app/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  _selectedModal: number;
  constructor(public service: LlbService) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  showModal(modal: ModalComponent, id: number) {
    modal.show();
    this._selectedModal = id;
=======
  selectBus(id: number) {
    this.service.changeBusId(id);
>>>>>>> Loader spinner while loading bus data for first time.
  }

}
