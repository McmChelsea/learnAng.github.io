import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class alertServiceService {
  private alertSubject = new Subject<any>();
  constructor() { }

  errors(message: string) {
    this.alertSubject.next({type: 'error', text: message});
  }

  success(message: string) {
    this.alertSubject.next({type: 'success', text: message});
  }

  getAlerts() {
    return this.alertSubject.asObservable();
  }
}
