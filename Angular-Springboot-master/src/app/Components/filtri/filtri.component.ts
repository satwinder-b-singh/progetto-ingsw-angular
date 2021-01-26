import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.css']
})
export class FiltriComponent implements OnInit {

 private ele: any;
  constructor() { }

  ngOnInit() {
  }

  azzera() {
     this.ele = document.getElementsByName('category');
    for (let i = 0; i < this.ele .length; i++) {
      this.ele[i].checked = false;
    }
    this.ele = document.getElementsByName('size');
    for (let i = 0; i < this.ele.length; i++) {
      this.ele[i].checked = false;
    }
    this.ele = document.getElementsByName('sesso');
    for (let i = 0; i < this.ele.length; i++) {
      this.ele[i].checked = false;
    }
  }
}
