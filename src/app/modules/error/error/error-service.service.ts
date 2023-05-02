import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {
  private errorSubject = new Subject<any>();
  constructor() { }

  errors(message: string) {
    this.errorSubject.next(message);
  }

  getAlerts() {
    return this.errorSubject.asObservable();
  }
}
