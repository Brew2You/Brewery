import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { Beer } from './beer';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  beers: Beer[];

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this.getInventory();
  }

  getInventory() {
    this._storeService.getInventory().then((beers: any) => this.beers = beers);
  }

}
