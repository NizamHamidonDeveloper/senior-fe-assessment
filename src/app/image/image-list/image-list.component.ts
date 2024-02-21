import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { ImageInterface } from 'src/app/model/image.model';
import { ImageService } from 'src/app/shared/service/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  state$!: any;
  empList: Array<{task: string, link: string}> = [];
  imageListData: ImageInterface [] = [];
  imageLists: ImageInterface[] = [];
  isExpanded: boolean = false
  page = 0;
  size = 12;
  constructor(
    private imageService: ImageService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params['state']){

      this.state$ = JSON.parse(this.activatedRoute.snapshot.params['state'])
      this.empList.push(this.state$)
    }
   this.onGetImageList({pageIndex: this.page, pageSize: this.size})
   if(this.empList.length != 0) {
    this.isExpanded = true
    this.onAssignTask(this.empList,{pageIndex: this.page, pageSize: this.size})
   }
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

  onAssignTask(list: any, obj: any) {
    console.log(list);
    

    let index=0,
    startingIndex=obj.pageIndex * obj.pageSize,
    endingIndex=startingIndex + obj.pageSize;

    

      this.imageService.getImageList()
      .pipe(
        takeUntil(this.destroy$.asObservable())).subscribe(res =>{
          this.imageLists = res
          this.imageLists = this.imageLists.filter(x=>!list.some((z:any) => z.link === x.link))
          this.imageListData = this.imageLists.filter(() => {
            index++;
            return (index > startingIndex && index <= endingIndex) ? true : false;
          });
          this.cdr.detectChanges();
        })
    
    
    // console.log(this.imageLists);
    
  }

}
