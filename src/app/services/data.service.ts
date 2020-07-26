import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { IGoods } from '../interfaces/igoods'
const STORAGE_KEY = "local__goods";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public saveToLocalStorage(goods: IGoods) {
    const tmpGoodsList = this.storage.get(STORAGE_KEY) || [];
    tmpGoodsList.push(goods)
    this.storage.set(STORAGE_KEY, tmpGoodsList)
  }
  public getFromLocalStorage() {
    const currentGoodsList = this.storage.get(STORAGE_KEY) || [];
    return currentGoodsList;
  }
  public deleteFromLocalStorage(value) {
    this.storage.set(STORAGE_KEY, value);
  }
  public clearLocalStorage() {
    this.storage.clear();
    console.log("LocalStorage is cleared");
  }
}
