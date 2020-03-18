import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  closeResult: string;

  ngOnInit() {
  }

  close() {
    //send to form name of the assets
      this.activeModal.close();
  }
}

