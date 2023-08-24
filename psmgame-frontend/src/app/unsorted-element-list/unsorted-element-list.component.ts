import { Component, OnInit } from '@angular/core';
import {ShareService} from "../share.service";
import {sortElement} from "../models/list.model";



@Component({
  selector: 'app-unsorted-element-list',
  templateUrl: './unsorted-element-list.component.html',
  styleUrls: ['./unsorted-element-list.component.css']
})
export class UnsortedElementListComponent implements OnInit {

  gameStarted: boolean = false;

  constructor(private ss: ShareService) { }

  sortElements: sortElement[] = [ ];




  ngOnInit(): void {
    this.ss.getGameStarted().subscribe(value => {
      this.gameStarted = value;
    });

    this.ss.getUnsortedList().subscribe(value => {
      this.sortElements = value;
    });

  }

}
