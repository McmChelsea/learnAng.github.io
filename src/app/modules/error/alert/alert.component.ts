import { Component, OnInit } from '@angular/core';
import { alertServiceService } from './alert.service';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  message!: any;
  private subscription!: Subscription;
  
  constructor(
    private alertService: alertServiceService,
    private router: Router
  ) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      }
    })
   }

  ngOnInit(): void {
    this.subscription =  this.alertService.getAlerts().subscribe(message => {
      switch(message && message.type) {
        case 'success':
          message.cssClass = 'alert alert-success';
          break;
        case 'error':
          message.cssClass = 'alert alert-danger';
          break;
      }
      this.message = message;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
