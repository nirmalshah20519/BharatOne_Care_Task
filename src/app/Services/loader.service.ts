import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  private loadFlag = false

  get flag(){
    return this.loadFlag
  }
  setFlag(b:boolean){
    this.loadFlag=b
  }
}
