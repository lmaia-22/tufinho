import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../../services/connection.service';
import { InicioComponent } from '../../modal/inicio/inicio.component';
import { PeloComponent } from '../../modal/pelo/pelo.component';
import { ProblemaComponent } from '../../modal/problema/problema.component';
import { PancaComponent } from '../../modal/panca/panca.component';
import { OportunidadeComponent } from '../../modal/oportunidade/oportunidade.component';
import { EstupidezComponent } from '../../modal/estupidez/estupidez.component';
import { SaudadesComponent } from '../../modal/saudades/saudades.component';
import { MimosComponent } from '../../modal/mimos/mimos.component';
import { DiscussoesComponent } from 'src/app/modal/discussoes/discussoes.component';
import { PatasComponent } from 'src/app/modal/patas/patas.component';
import { NikitaComponent } from 'src/app/modal/nikita/nikita.component';
import { PerdidoComponent } from 'src/app/modal/perdido/perdido.component';
import { NatalComponent } from 'src/app/modal/natal/natal.component';
import { RecomecoComponent } from 'src/app/modal/recomeco/recomeco.component';
import { QuestaoComponent } from 'src/app/modal/questao/questao.component';
import { AlmocoComponent } from 'src/app/modal/almoco/almoco.component';
import { GatinhoComponent } from 'src/app/modal/gatinho/gatinho.component';
import { CupidoComponent } from 'src/app/modal/cupido/cupido.component';
import { SurpresaComponent } from 'src/app/modal/surpresa/surpresa.component';
import { YoutubeComponent } from 'src/app/modal/youtube/youtube.component';
import { DesejosComponent } from 'src/app/modal/desejos/desejos.component';
import { CartanatalComponent } from 'src/app/modal/cartanatal/cartanatal.component';
import { PoemaComponent } from 'src/app/modal/poema/poema.component';
import { SadkittyComponent } from 'src/app/modal/sadkitty/sadkitty.component';
import { SmileComponent } from 'src/app/modal/smile/smile.component';
import { TimeComponent } from 'src/app/modal/time/time.component';

@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.css'],
})
export class KittensComponent implements OnInit {

  closeResult: string;
  contactForm: FormGroup;

    constructor(private modalService: NgbModal, private fb: FormBuilder, private connectionService: ConnectionService) {
  
      this.contactForm = fb.group({
        'contactFormSubjects': ['', Validators.required],
        'contactFormMessage': ['', Validators.required],
        });
      }

//email - desejo  
  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Desejo pedido!');
      this.contactForm.reset();
    }, error => {
      console.log('Error', error);
    });
  }

  ngOnInit() {
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

//miss modal component
  open() {
    const modalRef = this.modalService.open(SurpresaComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'surpresa';
  }

//modal as a component
  open1() {
    const modalRef = this.modalService.open(InicioComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'inicio';
  }

  open2() {
    const modalRef = this.modalService.open(PeloComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'pelo';
  }

  open3() {
    const modalRef = this.modalService.open(ProblemaComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'problema';
  }

  open4() {
    const modalRef = this.modalService.open(PancaComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'panca';
  }

  open5() {
    const modalRef = this.modalService.open(OportunidadeComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'oportunidade';
  }

  open6() {
    const modalRef = this.modalService.open(EstupidezComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'estupidez';
  }

  open7() {
    const modalRef = this.modalService.open(SaudadesComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'saudades';
  }

  open8() {
    const modalRef = this.modalService.open(MimosComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'mimos';
  }

  open9() {
    const modalRef = this.modalService.open(DiscussoesComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'discussoes';
  }

  open10() {
    const modalRef = this.modalService.open(PatasComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'patas';
  }

  open11() {
    const modalRef = this.modalService.open(NikitaComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'nikita';
  }

  open12() {
    const modalRef = this.modalService.open(PerdidoComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'perdido';
  }

  open13() {
    const modalRef = this.modalService.open(NatalComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'natal';
  }

  open14() {
    const modalRef = this.modalService.open(RecomecoComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'recomeço';
  }

  open15() {
    const modalRef = this.modalService.open(QuestaoComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'questão';
  }

  open16() {
    const modalRef = this.modalService.open(AlmocoComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'almoço';
  }

  open17() {
    const modalRef = this.modalService.open(GatinhoComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'gatinho';
  }

  open18() {
    const modalRef = this.modalService.open(CupidoComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'cupido';
  }

  open19() {
    const modalRef = this.modalService.open(YoutubeComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'cupido';
  }

  open20(content14) {
    this.modalService.open(content14, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open21() {
    const modalRef = this.modalService.open(CartanatalComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'carta';
  }

  open22() {
    const modalRef = this.modalService.open(PoemaComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'poema';
  }

  open23() {
    const modalRef = this.modalService.open(SadkittyComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'sadkitty';
  }

  open24() {
    const modalRef = this.modalService.open(SmileComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'smile';
  }

  open25() {
    const modalRef = this.modalService.open(TimeComponent, {size:"lg", backdrop: 'static'});
    modalRef.componentInstance.title = 'time';
  }
}