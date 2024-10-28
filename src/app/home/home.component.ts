import { Component } from '@angular/core';
import { ChartService } from '../chart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartListService } from '../cart-list.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
value:any  
constructor(private service: ChartService , private cartList:CartListService ) {
  this.value = 0; // Initialize value
}

ngOnInit(): void {
  // Retrieve the value when the component is initialized
  this.value = this.service.getValue();
}
addButton(money:number , name:string , imageUrl:string){

  this.value += money; 
  this.service.setValue(this.value);
  
  const item={
    name:name,
    price:money,
    img:imageUrl
  }

  this.cartList.setCartList(item)
}






}
