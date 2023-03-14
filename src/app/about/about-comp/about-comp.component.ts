import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-about-comp',
  templateUrl: './about-comp.component.html',
  styleUrls: ['./about-comp.component.scss']
})
export class AboutCompComponent implements OnInit {

  id!: number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

}
