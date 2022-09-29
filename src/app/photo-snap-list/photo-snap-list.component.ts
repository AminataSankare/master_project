import { Component, OnInit } from '@angular/core';
import { PhotoSnap } from '../model/model-snape';
import { PhotoSnapsService } from '../services/photo-snaps.service';

@Component({
  selector: 'app-photo-snap-list',
  templateUrl: './photo-snap-list.component.html',
  styleUrls: ['./photo-snap-list.component.scss']
})
export class PhotoSnapListComponent implements OnInit {
  photoSnaps!: PhotoSnap[];
  constructor(private photosnapservice :PhotoSnapsService) { }
  ngOnInit(): void{
    
    this.photoSnaps=this.photosnapservice.getAllPhotoSnaps();
  
  }

}
