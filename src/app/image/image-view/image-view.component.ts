import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
  idSubscription!: Subscription;
  id!: any;
  taskForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private location: Location,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      task: [null]
    });
    this.idSubscription = this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })
  }

  back() {

    this.location.back();
  }

  confirm() {
    console.log(this.taskForm.get('task')?.value)
    this.router.navigate(['/image', { state: JSON.stringify({ task: this.taskForm.get('task')?.value, link: this.id }) }])
  }


}
