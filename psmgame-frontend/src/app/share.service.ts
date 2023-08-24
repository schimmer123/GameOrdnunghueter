import {Injectable} from '@angular/core';
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";
import {BehaviorSubject, Observable} from 'rxjs';
import {Player} from "./models/player.model";
import {Lists, sortElement} from "./models/list.model";
import {ApiServiceService} from "./api-service.service";
import {MatDialog} from "@angular/material/dialog";
import {GameoverPopupComponent} from "./gameover-popup/gameover-popup.component";



@Injectable()
export class ShareService {

  startPlayer: number = 0;

  helpList: sortElement[] = [];

  players: Player[] = [
    {id: 1, name: 'Player 1', mistakes: 0, playersTurn: false, playerLost: false},
  ];

  //lists: Lists[] = []

  private gameStarted: BehaviorSubject<boolean>;
  private choosenList: BehaviorSubject<sortElement[]>;
  private unsortedList: BehaviorSubject<sortElement[]>;
  private toSortList: BehaviorSubject<sortElement[]>;
  private headline: BehaviorSubject<string>;
  private startGameButton: BehaviorSubject<boolean>;
  private lists: BehaviorSubject<Lists[]>;

  constructor(private apiService: ApiServiceService,
              public dialog: MatDialog) {
    this.gameStarted = new BehaviorSubject<boolean>(false);
    this.choosenList = new BehaviorSubject<sortElement[]>([]);
    this.unsortedList = new BehaviorSubject<sortElement[]>([]);
    this.toSortList = new BehaviorSubject<sortElement[]>([]);
    this.headline = new BehaviorSubject<string>("");
    this.startGameButton = new BehaviorSubject<boolean>(true);
    this.lists = new BehaviorSubject<Lists[]>([]);


  }

  getGameStarted(): Observable<boolean> {
    return this.gameStarted.asObservable();
  }
  setGameStarted(newValue: boolean): void {
    this.gameStarted.next(newValue);
  }

  getChoosenList(): Observable<sortElement[]> {
    return this.choosenList.asObservable();
  }
  setChoosenList(newValue: sortElement[]): void {
    this.choosenList.next(newValue);
  }
  getUnsortedList(): Observable<sortElement[]> {
    return this.unsortedList.asObservable();
  }
  setUnsortedList(newValue: sortElement[]): void {
    this.unsortedList.next(newValue);
  }
  getToSortList(): Observable<sortElement[]> {
    return this.toSortList.asObservable();
  }
  setToSortList(newValue: sortElement[]): void {
    this.toSortList.next(newValue);
  }
  getHeadline(): Observable<string> {
    return this.headline.asObservable();
  }
  setHeadline(newValue: string): void {
    this.headline.next(newValue);
  }
  getStartGameButton(): Observable<boolean> {
    return this.startGameButton.asObservable();
  }
  setStartGameButton(newValue: boolean): void {
    this.startGameButton.next(newValue);
  }
  getLists(): Observable<Lists[]> {
    return this.lists.asObservable();
  }
  setLists(newValue: Lists[]): void {
    this.lists.next(newValue);
  }

   fetchLists() {
      this.apiService.getLists().subscribe((data: any) => {
      this.setLists(data);
     });
  }


  onDrop(event: CdkDragDrop<sortElement[]>) {
    if (event.container.data[event.currentIndex - 1] == undefined) {
      if (event.previousContainer.data[event.previousIndex].id < event.container.data[event.currentIndex].id) {
        this.playerDidRight(event)

      } else {
        this.playerDidMistake()

      }

    } else if (event.container.data[event.currentIndex] == undefined) {
      if (event.container.data[event.currentIndex - 1].id < event.previousContainer.data[event.previousIndex].id) {
        this.playerDidRight(event)

      } else {
        this.playerDidMistake()


      }

    } else {
      if (event.previousContainer.data[event.previousIndex].id > event.container.data[event.currentIndex - 1].id
        && event.previousContainer.data[event.previousIndex].id < event.container.data[event.currentIndex].id) {
        this.playerDidRight(event)

      } else {
        this.playerDidMistake()


      }
    }


    setTimeout(() => this.isGameOver(event), 2000);
  }


  playerDidRight(event: CdkDragDrop<sortElement[]>) {

    //changing the elements between the DragDropLists
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);

    //setting the playersTurn to false for the player who just did his turn
    this.players[this.startPlayer].playersTurn = false;

    this.settingPlayersTurn()


  }


  playerDidMistake() {
    //setting the playersTurn to false for the player who just did his turn
    this.players[this.startPlayer].playersTurn = false;
    //increasing the mistakes of the player
    this.players[this.startPlayer].mistakes++;

    //checking if the player has lost
    if (this.players[this.startPlayer].mistakes == 3) {
      this.players[this.startPlayer].playerLost = true;
    }


    this.settingPlayersTurn()
  }

  //setting the turn for the next player and resetting the round if its needed
  settingPlayersTurn() {
    this.startPlayer++;
    if (this.startPlayer == this.players.length) {
      this.startPlayer = 0;
    }
    this.players[this.startPlayer].playersTurn = true;

    //checking if the player has lost
    if (this.players[this.startPlayer].playerLost == true) {
      this.settingPlayersTurn()
    }

  }

  //checking if game is over
  isGameOver(event: CdkDragDrop<sortElement[]>) {
    if (event.previousContainer.data.length == 0) {
      const dialogRef = this.dialog.open(GameoverPopupComponent, {
        width: '550px',
        height: '100px',
      });
    }


  }

  //adding new player
  addPlayer() {
    if (this.players.length < 4) {
      this.players.push({
        id: this.players.length + 1,
        name: 'Player ' + (this.players.length + 1),
        mistakes: 0,
        playersTurn: false,
        playerLost: false
      })
    }
    console.log(this.players)
  }

  //starting the game
  startGame() {
    this.players[0].playersTurn = true;
    this.setGameStarted(true);
  }

  //resetting the game
  resetGame() {
    this.players = [
      {id: 1, name: 'Player 1', mistakes: 0, playersTurn: false, playerLost: false},
    ];
    this.setGameStarted(false);
    this.setStartGameButton(true);
    this.setUnsortedList([]);
    this.setToSortList([]);
    this.setHeadline('');
    this.setChoosenList([]);
  }

  createGameList(list: sortElement[], headline: string) {
    this.setStartGameButton(false)
    for (let i = 0; i < list.length; i++) {
      this.helpList.push(list[i]);
    }
    const randomIndex = Math.floor(Math.random() * this.helpList.length);
    const randomElement = this.helpList.splice(randomIndex, 1)[0];

    const randomElementInList = [
      randomElement
    ];
    this.helpList.sort(() => Math.random() - 0.5);
    this.setUnsortedList(this.helpList);
    this.setToSortList(randomElementInList);
    this.setHeadline(headline);
    this.helpList = [];

  }


  createNewLst(name: string, listElements: sortElement[]) {
    console.log(listElements)
    console.log(name)

    const newList: Lists = {
      name: name,
      list: listElements
    };


    this.apiService.createList(newList)



  }
}
