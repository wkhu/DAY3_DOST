import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  res: any = [];
  public apiSub: Subscription = new Subscription();

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiSub.add(
      this.apiService.getApi().subscribe(
        result=>{
          console.log("result",result);
          console.log(typeof(result));
          this.res = result;
        },
        error=>{
          console.log(error);
        }
        )
    );
  }
}
