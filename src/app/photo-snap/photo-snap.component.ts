import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoSnap } from '../model/model-snape';
import { PhotoSnapsService } from '../services/photo-snaps.service';

@Component({
  selector: 'app-photo-snap',
  templateUrl: './photo-snap.component.html',
  styleUrls: ['./photo-snap.component.scss']
})
export class PhotoSnapComponent implements OnInit {

  constructor(private photosnapService : PhotoSnapsService,private router : Router ) { }
  like!: string;
  @Input() faceSnap!: PhotoSnap;



  ngOnInit(): void {
    
    this.like = 'like!';


  }

  onAddSnap() {
    if (this.like === 'like!') {
      this.faceSnap.partages++;
      this.like = 'unlike!';
    } else {
      this.faceSnap.partages--;
      this.like="like!"
    }
    
  } 

/*onPartager()
{if (this.like === 'like!') {
this.photosnapService.(this.faceSnap.id);
this.like = 'unlike!';
}else{
  this.photosnapService.unlikePotoSnapById(this.faceSnap.id);
  this.like="like!"
}

}*/

onPartager()
{if (this.like === 'like!') {
this.photosnapService.likeOrUnLikeById(this.faceSnap.id,'like!');
this.like = 'unlike!';
}else{
  this.photosnapService.likeOrUnLikeById(this.faceSnap.id,'unlike!');;
  this.like="like!"
}

}
onViewFaceSnap(){
  this.router.navigateByUrl(`photosnaps/${this.faceSnap.id}`)  
}
}
