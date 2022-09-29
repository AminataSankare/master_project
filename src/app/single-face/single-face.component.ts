import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoSnap } from '../model/model-snape';
import { PhotoSnapsService } from '../services/photo-snaps.service';

@Component({
  selector: 'app-single-face',
  templateUrl: './single-face.component.html',
  styleUrls: ['./single-face.component.scss']
})
export class SingleFaceComponent implements OnInit {

  constructor(private photosnapService : PhotoSnapsService,private route: ActivatedRoute ) { }
  like!: string;
  faceSnap!: PhotoSnap;



  ngOnInit(): void {
    
    this.like = 'like!';
    const id = +this.route.snapshot.params['id'];
    this.faceSnap = this.photosnapService.findPhotoSnapsById(id)

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

}
