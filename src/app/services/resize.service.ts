import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  constructor() {}

  private widthBS = new BehaviorSubject<number>(0);
  appWidth$ = this.widthBS.asObservable();

  onWidthChanged(width: number): void {
    this.widthBS.next(width);
  }
}
