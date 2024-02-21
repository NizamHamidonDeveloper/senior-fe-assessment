import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
  idSubscription!: Subscription;
  id!: any;
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })
  }

  back() {

    this.location.back();
  }


}
