import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { GoodsService } from 'src/app/services/goods.service';
import { IGoods } from 'src/app/interfaces/igoods';
@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  goods: IGoods[];
  constructor(@Inject(DataService) private data: DataService,
    @Inject(GoodsService) private goodsList: GoodsService) {
  }
  ngOnInit(): void {
    this.goods = this.goodsList.getGoodsList();
  }
  addToCart(id) {
    const currentItem = this.goods.filter((item) => {
      return item.id == id;
    });
    this.data.saveToLocalStorage(currentItem[0]);
  }
}
