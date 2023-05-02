import { Component, OnInit } from '@angular/core';
import { ErrorServiceService } from './error-service.service';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  message!: string;
  private subscription!: Subscription;
  
  constructor(
    private errorService: ErrorServiceService,
    private router: Router
  ) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
      }
    })
   }

  ngOnInit(): void {
    this.subscription =  this.errorService.getAlerts().subscribe(res => {
      console.log(1, res)
      this.message = res;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
