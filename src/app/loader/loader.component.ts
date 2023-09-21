import { Component } from '@angular/core';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private loadServ:LoaderService){

  }
  get loadFlag(){
    return this.loadServ.flag
  }
}
