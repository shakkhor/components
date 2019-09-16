import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carocarousel',
  templateUrl: './carocarousel.component.html',
  styleUrls: ['./carocarousel.component.scss']
})
export class CarocarouselComponent implements OnInit {

  items: Array<any> = []

  constructor() { 
    this.items =[
      { name: '../../assests/images/1.jpg'},
      { name: '../../assests/images/2.jpg'},
      { name: '../../assests/images/3.jpg'},
      { name: '../../assests/images/4.jpg'},
      { name: '../../assests/images/5.jpg'},
      { name: '../../assests/images/1.jpg'},
      { name: '../../assests/images/2.jpg'},
      { name: '../../assests/images/3.jpg'},
      { name: '../../assests/images/4.jpg'},
      { name: '../../assests/images/5.jpg'}
    ]
    
  }

  ngOnInit() {
  }

}
