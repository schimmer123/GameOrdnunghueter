import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDragSortEvent, transferArrayItem} from "@angular/cdk/drag-drop";
import {ShareService} from "../share.service";
import {sortElement} from "../models/list.model";



@Component({
  selector: 'app-to-sort-element-list',
  templateUrl: './to-sort-element-list.component.html',
  styleUrls: ['./to-sort-element-list.component.css']
})
export class ToSortElementListComponent implements OnInit {

  sortElements: sortElement[] = [
  ];

  headline: string = "";

  constructor(private ss: ShareService) {
  }

  ngOnInit(): void {
    this.ss.getToSortList().subscribe(value => {
      this.sortElements = value;
    });

    this.ss.getHeadline().subscribe(value => {
      this.headline = value;
    });


  }


  onDrop(event: CdkDragDrop<sortElement[]>) {
      this.ss.onDrop(event);
  }

}

