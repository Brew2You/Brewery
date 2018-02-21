import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreService {

  private StoreURL = '';
  private _port = 'Change this to start';

  constructor(
    @Inject(Document) private _doc: any,
    private _http: HttpClient
  ) { 
    this.StoreURL = _doc.location.protocol + '//' + _doc.location.hostname + this._port + '/api/store';
  }

  getInventory(){
    return this._http.get(this.StoreURL).toPromise();
  }
}
