import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartService } from '../chart.service';
import { CartListService } from '../cart-list.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  chart:any;
  cartItems:any[]=[]
 showSideCart= false
constructor( private service:ChartService , private cartList:CartListService){ }
ngOnInit(): void {
  this.service.value$.subscribe(value=>{
    this.chart=value
  })
  this.cartList.cartList$.subscribe((c)=>{
    this.cartItems=c
  })
}

showCart(){
  this.showSideCart = true
}

}