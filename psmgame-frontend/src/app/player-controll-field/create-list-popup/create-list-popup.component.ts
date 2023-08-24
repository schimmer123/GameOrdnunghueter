import {Component, inject, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {sortElement} from "../../models/list.model";
import {ShareService} from "../../share.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";



@Component({
  selector: 'app-create-list-popup',
  templateUrl: './create-list-popup.component.html',
  styleUrls: ['./create-list-popup.component.css']
})
export class CreateListPopupComponent implements OnInit {

  name: string = '';
  listFull: boolean = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;
  listElements: sortElement[] = [ ];

  constructor(private ss: ShareService,
              public dialogRef: MatDialogRef<CreateListPopupComponent>) { }

  ngOnInit(): void {
  }
  createNewLst (){
    this.dialogRef.close();
    this.ss.createNewLst(this.name, this.listElements);
    this.ss.fetchLists();
    setTimeout(() => this.ss.fetchLists(), 1000)
  }




  add(event: MatChipInputEvent): void {

    // Add our fruit
    if (event.value) {
      this.listElements.push({id: this.listElements.length, text: event.value});
    }

    console.log(this.listElements.length)

    if(this.listElements.length == 10){
      this.listFull = true;
    }
    // Clear the input value
    event.chipInput!.clear();

  }

  remove(data: sortElement): void {
    const index = this.listElements.indexOf(data);

    if (index >= 0) {
      this.listElements.splice(index, 1);
    }
  }



}
