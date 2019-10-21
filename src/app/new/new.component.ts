import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription, timer } from 'rxjs';
import { switchMap} from 'rxjs/operators'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  subscription: Subscription;
  result: Object;
  disp: any;
  Name:any;
  term:any={title:''}
  constructor(private s:DataService) { }
click(result) {
  this.disp=result
  this.Name=result.title
  this.s.postData(result).subscribe(resp=>console.log(resp))
}
  ngOnInit() {
    this.subscription=timer(0,10000).pipe(switchMap(()=>this.s.getData())).subscribe(resp=>{this.result=resp['hits']
      console.log(resp)})
  }

}
