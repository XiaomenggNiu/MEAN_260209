import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-intro',
  standalone: false,
  templateUrl: './routing-intro.html',
  styleUrl: './routing-intro.scss',
})
export class RoutingIntro implements OnInit{
  constructor(private ar: ActivatedRoute){}

  ngOnInit(): void {
    
    this.ar.params.subscribe((params)=>{
      console.log(params)
      // call the method in service to get info with this id
    })
    this.ar.data.subscribe((data)=>{
      console.log("recevied from resolver", data);
    })
  }
}
