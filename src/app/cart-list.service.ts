import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartListService {

private cartList = new BehaviorSubject<any[]>([])
cartList$ = this.cartList.asObservable()

setCartList(item:any){
  const currentItems = this.cartList.value
  this.cartList.next([...currentItems,item])
}
getCartList(){
  return this.cartList.value
}



}