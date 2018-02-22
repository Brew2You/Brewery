import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeerService {

  private BeerURL = 'http://localhost:59087';

  constructor(
    // @Inject(Document) _doc: any,
    private _http: HttpClient
  ) {
    this.BeerURL = this.BeerURL + '/api/beer';
  }


  getBeer() {
    return this._http.get(this.BeerURL).toPromise();
  }
}
