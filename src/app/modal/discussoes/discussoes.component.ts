import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.css']
})
export class DiscussoesComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  closeResult: string;
  
  ngOnInit() {
  }

  close() {
    //send to form name of the assets
      this.activeModal.close();
}

}
