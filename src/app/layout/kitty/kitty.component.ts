import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { Cat } from '../../models/cat';
import { Fact } from '../../models/fact';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.css']
})
export class KittyComponent implements OnInit {

  cats:Cat[];
  facts:Fact[];

  constructor(private catsservice: CatsService) { }

  ngOnInit() {
    this.catsservice.getCats().subscribe(cat => {
      this.cats = cat;
    });

    // this.catsservice.getFacts().subscribe(fact => {
    //   this.facts = fact;
    //   console.log(this.facts);
    // });
  }

  refresh(): void {
    window.location.reload();
}

}
