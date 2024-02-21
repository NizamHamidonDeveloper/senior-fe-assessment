import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ImageInterface } from 'src/app/model/image.model';
import { ImageService } from 'src/app/shared/service/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  imageListData: ImageInterface [] = [];
  imageLists: ImageInterface[] = [];
  page = 0;
  size = 12;
  constructor(
    private imageService: ImageService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
   this.onGetImageList({pageIndex: this.page, pageSize: this.size})
  }

  onGetImageList(obj: any) {

    let index=0,
    startingIndex=obj.pageIndex * obj.pageSize,
    endingIndex=startingIndex + obj.pageSize;

    this.imageService.getImageList()
    .pipe(
      takeUntil(this.destroy$.asObservable())).subscribe(res =>{
        this.imageLists = res
        this.imageListData = this.imageLists.filter(() => {
          index++;
          return (index > startingIndex && index <= endingIndex) ? true : false;
        });
        this.cdr.detectChanges();
      })
  }

  onClickImageView(id: any) {
    this.router.navigate(['/image',id])
    
  }

}
