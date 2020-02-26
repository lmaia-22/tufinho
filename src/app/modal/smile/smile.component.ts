import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-smile',
  templateUrl: './smile.component.html',
  styleUrls: ['./smile.component.css']
})
export class SmileComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  closeResult: string;
  
  ngOnInit() {
  }

  close() {
      this.activeModal.close();
}

}
