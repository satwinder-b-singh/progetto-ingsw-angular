import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.css']
})
export class FiltriComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  azzera(){
    var ele = document.getElementsByName("category");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
    ele = document.getElementsByName("size");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
    ele = document.getElementsByName("sesso");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
  }
}
