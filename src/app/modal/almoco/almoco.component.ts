import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-almoco',
  templateUrl: './almoco.component.html',
  styleUrls: ['./almoco.component.css']
})
export class AlmocoComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  closeResult: string;
  
  ngOnInit() {
  }

  close() {
    //send to form name of the assets
      this.activeModal.close();
  }

}
