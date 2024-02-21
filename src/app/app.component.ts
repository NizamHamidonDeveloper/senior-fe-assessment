import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/service/loading.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tapway-assesment';
  loading:boolean = false;

  constructor(private loadingService: LoadingService){}

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0)) 
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
