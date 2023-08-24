import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { UnsortedElementListComponent } from './unsorted-element-list/unsorted-element-list.component';
import { ToSortElementListComponent } from './to-sort-element-list/to-sort-element-list.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { ShareService } from './share.service';
import { PlayerElementComponent } from './player-controll-field/player-element/player-element.component';
import { PlayerControllFieldComponent } from './player-controll-field/player-controll-field.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import { CreateListPopupComponent } from './player-controll-field/create-list-popup/create-list-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import { GameoverPopupComponent } from './gameover-popup/gameover-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsortedElementListComponent,
    ToSortElementListComponent,
    PlayerElementComponent,
    PlayerControllFieldComponent,
    CreateListPopupComponent,
    GameoverPopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    DragDropModule,
    FontAwesomeModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatChipsModule,
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
