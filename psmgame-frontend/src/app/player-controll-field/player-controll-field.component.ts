import {Component, OnInit} from '@angular/core';
import {ShareService} from "../share.service";
import {faCirclePlus, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {Player} from "../models/player.model";
import {Lists} from "../models/list.model";
import {ApiServiceService} from "../api-service.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateListPopupComponent} from "./create-list-popup/create-list-popup.component";


@Component({
  selector: 'app-player-controll-field',
  templateUrl: './player-controll-field.component.html',
  styleUrls: ['./player-controll-field.component.css']
})
export class PlayerControllFieldComponent implements OnInit {

  players: Player[] = this.ss.players;
  dropdown_listPlaceholder: string = 'Liste auswählen';
  lists: Lists[] = [];
  gameStarted: boolean = false;
  startGameButton: boolean = true;
  faCirclePlus = faCirclePlus;
  faChevronDown = faChevronDown;

  constructor(private ss: ShareService,
              private apiService: ApiServiceService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.ss.getGameStarted().subscribe(value => {
      this.gameStarted = value;
    });

    this.ss.getStartGameButton().subscribe(value => {
      this.startGameButton = value;
    });

    this.ss.fetchLists();

    this.ss.getLists().subscribe(value => {
      this.lists = value;
    });



  }

  addPlayer() {
    this.ss.addPlayer();
  }

  openAddListWindow() {
    const dialogRef = this.dialog.open(CreateListPopupComponent, {
      width: '550px',
      height: '550px',
    });
  }


  startGameButoon() {
    this.ss.startGame();

  }

  restartGame() {
    this.ss.resetGame();
    this.players = this.ss.players;
  }


  onListClick(list: Lists) {
    this.ss.createGameList(list.list, list.name);
    this.dropdown_listPlaceholder = list.name;
  }


}
