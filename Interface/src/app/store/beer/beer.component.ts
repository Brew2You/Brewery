import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service';
import { Beer } from './beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  Beer: Beer[];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeer();
  }

  getBeer() {
    this.beerService.getBeer().then((beers: any) => this.Beer = beers);
  }

}
