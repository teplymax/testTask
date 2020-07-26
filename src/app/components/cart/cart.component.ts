import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(@Inject(DataService) private data: DataService) {
  }

  goods = [];
  totalPrice = 0;
  getTotalPrice() {
    this.totalPrice = 0;
    this.goods.forEach((item) => {
      this.totalPrice += item.price;
    })
  }
  ngOnInit(): void {
    this.goods = this.data.getFromLocalStorage();
    this.getTotalPrice();
  }

  getGoods() {
    this.goods = this.data.getFromLocalStorage();
    this.getTotalPrice();
  }
  clearCart() {
    this.data.clearLocalStorage();
    this.getGoods();
    alert('Your cart has been cleared!')
  }
  deleteItem(id) {
    this.getGoods();
    let newValue = this.goods.filter((item) => {
      return item.id != id;
    })
    this.data.deleteFromLocalStorage(newValue);
    this.getGoods();
  }
}
