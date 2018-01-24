import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import { ModalComponent } from '../modal/modal.component';
import {LoaderService} from '../../service/loader.service';
import {isNullOrUndefined} from '../../../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isNullOrUndefined = isNullOrUndefined;
  _selectedModal: number;

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }

  // modal function to show and hode modals
  showModal(modal: ModalComponent, id: number) {
    modal.show();
    this._selectedModal = id;
  }
  hideModal(modal: ModalComponent) {
    modal.hide();
    this._selectedModal = 0;
  }
}
