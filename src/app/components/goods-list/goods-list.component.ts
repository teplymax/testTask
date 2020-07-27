import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IGoods } from '../../interfaces/igoods'
@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  constructor(@Inject(DataService) private data: DataService) {
  }

  goods: IGoods[] = [{
    id: 1, name: "article 1", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 25
  },
  {
    id: 2, name: "article 2", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 35
  },
  {
    id: 3, name: "article 3", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 45
  }]

  ngOnInit(): void {
  }
  addToCart(id) {
    const currentItem = this.goods[id - 1];
    this.data.saveToLocalStorage(currentItem);
    alert('Item has been added!')
  }
}
