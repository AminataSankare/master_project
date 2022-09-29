import { Injectable } from '@angular/core';
import { PhotoSnap } from '../model/model-snape';


@Injectable({
  providedIn: 'root'
})
export class PhotoSnapsService {
 
  constructor() { }
  photoSnaps :PhotoSnap[]  = [
    {
      id: 1,
      title : 'Archibald',
      description : 'Mon meilleur ami depuis tout petit !',
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate : new Date(),
      partages: 255,
      location:"Paris"
    },
    {
      id:2,
      title : 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate : new Date(),
      partages: 3000,
    },
    {
      id:3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      partages: 0,
      location : "dakar"
    }
  ]
  getAllPhotoSnaps(): PhotoSnap[] {
    return this.photoSnaps;
}

likePotoSnapById(photosnameId:number):void{
  const faceSnap  = this.photoSnaps.find(photosnap =>photosnap.id===photosnameId);
  if(faceSnap){
    faceSnap.partages++;
  }else{
    throw new Error("il n'ya pa photosnap avec cet id");

  }
}

unlikePotoSnapById(photosnameId:number):void{
  const faceSnap  = this.photoSnaps.find(photosnap =>photosnap.id===photosnameId);
  if(faceSnap){
    faceSnap.partages--;
  }else{
    throw new Error("il n'ya pa photosnap avec cet id");

  }
}

likeOrUnLikeById(photosnameId:number,likeUnlike :'like!'|'unlike!'):void{
  const faceSnap  = this.photoSnaps.find(photosnap =>photosnap.id===photosnameId)
  if(faceSnap){;
  likeUnlike === 'like!' ? faceSnap.partages++:faceSnap.partages--
}else{
  throw new Error("il n'ya pa photosnap avec cet id");

}
}
findPhotoSnapsById(id:number){
  const faceSnap  = this.photoSnaps.find(photosnap =>photosnap.id===id);
  if(faceSnap){
    return faceSnap
  }else{
    throw new Error("il n'ya pa photosnap avec cet id");
  }
}
}
