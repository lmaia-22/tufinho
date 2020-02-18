import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sadkitty',
  templateUrl: './sadkitty.component.html',
  styleUrls: ['./sadkitty.component.css']
})
export class SadkittyComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  closeResult: string;
  
  ngOnInit() {
  }

  close() {
    //send to form name of the assets
      this.activeModal.close();
  }

}
