import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css'],
  providers: [NgbCarouselConfig] 
})
export class WhyComponent implements OnInit {

  images = ['../assets/c1.jpg', '../assets/c2.jpg', '../assets/c3.jpg', '../assets/c4.jpg'];
  closeResult: string;

  constructor(config: NgbCarouselConfig,
    private modalService: NgbModal
    ) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'size', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
