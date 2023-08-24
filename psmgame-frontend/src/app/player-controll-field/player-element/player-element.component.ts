import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player.model";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-player-element',
  templateUrl: './player-element.component.html',
  styleUrls: ['./player-element.component.css']
})
export class PlayerElementComponent implements OnInit {

  faCircleXmark = faCircleXmark;

  @Input() player: Player = {id: 0, name: '', mistakes: 0, playersTurn: false, playerLost: false}
  constructor() { }

  ngOnInit(): void {

  }

}
