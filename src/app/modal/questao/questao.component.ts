import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  closeResult: string;
  
  ngOnInit() {
  }

  close() {
    //send to form name of the assets
      this.activeModal.close();
  }


}
