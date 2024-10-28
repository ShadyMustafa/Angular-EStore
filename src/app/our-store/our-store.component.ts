import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-store.component.html',
  styleUrl: './our-store.component.css'
})
export class OurStoreComponent {
  product:any;
  currentImageIndex=0;
  isFading=false
  products=[
    {
      id:1,
      name:'Simple way of piece life',
      price:40,
      images:['assets/images/product-item1.jpg','assets/images/product-item2.jpg','assets/images/product-item3.jpg','assets/images/product-item4.jpg']
    },
    {
      id:2,
      name:'Brain Eater (u can change them later adorable :D)',
      price:38
    },
    {
      id:3,
      name:'Skull of Maddness',
      price:45,
      images:['assets/images/product-item3.jpg','assets/images/product-item2.jpg','assets/images/product-item3.jpg','assets/images/product-item4.jpg']

    },
    {
      id:4,
      name:'Once upon a time',
      price:35
    },
  
  ]

  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe((params)=>{
      const name = params['name']
      this.product=this.products.find((e)=>e.name===name)
    })
  }

  previousImage(){
    if (!this.isFading) {
      this.isFading = true; // Start fading out
    }
    if(this.currentImageIndex > 0){
      this.currentImageIndex--
    }else{
      this.currentImageIndex = this.product.images.length -1;
    }
  }
  nextImage(){
    if (!this.isFading) {
      this.isFading = true; // Start fading out
    }
    if(this.currentImageIndex < this.product.images.length -1 ){
      this.currentImageIndex++
    }else{
      this.currentImageIndex=0
    }
  }
  onTransitionEnd() {
    if (this.isFading) {
      // Change the image after fade-out completes
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
      this.isFading = false; // Start fading in the new image
    }
  }
  
}
