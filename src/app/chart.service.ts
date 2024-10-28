import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private valueSource = new BehaviorSubject<number>(0); // Initial value
  value$ = this.valueSource.asObservable(); // Observable to allow subscriptions

  setValue(money: number) {
    this.valueSource.next(money); // Update the BehaviorSubject value
  }

  getValue() {
    return this.valueSource.value; // Get the latest value
  }
}
