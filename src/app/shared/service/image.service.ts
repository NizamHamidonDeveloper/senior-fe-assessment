import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageInterface } from 'src/app/model/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseURL = 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/image_paths.txt';
  //Cors issue
  localURL = 'assets/image.json'


  constructor(
    private httpClient: HttpClient,
  ) {
    
   }

   getImageList() : Observable<ImageInterface[]> {
    return this.httpClient.get<ImageInterface[]>(this.localURL)
   }
}
