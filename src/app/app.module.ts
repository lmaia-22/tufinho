import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { KittensComponent } from './layout/kittens/kittens.component';
import { WhyComponent } from './layout/why/why.component';
import { LittleComponent } from './layout/little/little.component';
import { InicioComponent } from './modal/inicio/inicio.component';
import { PeloComponent } from './modal/pelo/pelo.component';
import { ProblemaComponent } from './modal/problema/problema.component';
import { PancaComponent } from './modal/panca/panca.component';
import { OportunidadeComponent } from './modal/oportunidade/oportunidade.component';
import { EstupidezComponent } from './modal/estupidez/estupidez.component';
import { SaudadesComponent } from './modal/saudades/saudades.component';
import { MimosComponent } from './modal/mimos/mimos.component';
import { DiscussoesComponent } from './modal/discussoes/discussoes.component';
import { PatasComponent } from './modal/patas/patas.component';
import { NikitaComponent } from './modal/nikita/nikita.component';
import { NatalComponent } from './modal/natal/natal.component';
import { RecomecoComponent } from './modal/recomeco/recomeco.component';
import { QuestaoComponent } from './modal/questao/questao.component';
import { PerdidoComponent } from './modal/perdido/perdido.component';
import { AlmocoComponent } from './modal/almoco/almoco.component';
import { GatinhoComponent } from './modal/gatinho/gatinho.component';
import { CupidoComponent } from './modal/cupido/cupido.component';
import { SurpresaComponent } from './modal/surpresa/surpresa.component';
import { YoutubeComponent } from './modal/youtube/youtube.component';
import { DesejosComponent } from './modal/desejos/desejos.component';
import { CartanatalComponent } from './modal/cartanatal/cartanatal.component';
import { PoemaComponent } from './modal/poema/poema.component';
import { SadkittyComponent } from './modal/sadkitty/sadkitty.component';
import { KittyComponent } from './layout/kitty/kitty.component';
import { SmileComponent } from './modal/smile/smile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    KittensComponent,
    WhyComponent,
    LittleComponent,
    InicioComponent,
    PeloComponent,
    ProblemaComponent,
    PancaComponent,
    OportunidadeComponent,
    EstupidezComponent,
    SaudadesComponent,
    MimosComponent,
    DiscussoesComponent,
    PatasComponent,
    NikitaComponent,
    NatalComponent,
    RecomecoComponent,
    QuestaoComponent,
    PerdidoComponent,
    AlmocoComponent,
    GatinhoComponent,
    CupidoComponent,
    SurpresaComponent,
    YoutubeComponent,
    DesejosComponent,
    CartanatalComponent,
    PoemaComponent,
    SadkittyComponent,
    KittyComponent,
    SmileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],

  entryComponents: [
  InicioComponent,
  PeloComponent,
  ProblemaComponent,
  PancaComponent,
  OportunidadeComponent,
  EstupidezComponent,
  SaudadesComponent,
  MimosComponent,
  DiscussoesComponent,
  PatasComponent,
  NikitaComponent,
  NatalComponent,
  RecomecoComponent,
  QuestaoComponent,
  PerdidoComponent,
  AlmocoComponent,
  GatinhoComponent,
  CupidoComponent,
  SurpresaComponent,
  YoutubeComponent,
  DesejosComponent,
  CartanatalComponent,
  PoemaComponent,
  SadkittyComponent,
  SmileComponent
],

  bootstrap: [AppComponent]
})
export class AppModule { }
