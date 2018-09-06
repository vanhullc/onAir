import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from 'angularfire2/firestore';
import { PlayerService } from '../components/player/player.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public radiosList: any[];
  public radioUrl = null;
  public page: number = 1;
  public selectedRadio: any;

  private _usersEvent: any;
  private _userCollection: any;
  private _radioEvent: any;
  private _radioCollection: any;
  private _searchEvent: any;

  constructor(
      private db: AngularFirestore,
      private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    // this.usersService.getHome({});
    console.log('db');
    this._radioCollection = this.db.collection("radios");
    this.resetUserList();
    this._searchEvent = NavbarService.changeEvent.subscribe(
      (event) => {
        if (event.search) {
          console.log(event);
          this.searchUser(event.search);
        } else {
          this.resetUserList();
        }
      }
    );
  }

  onRadioClick(item) {
    let radio = this._radioCollection.doc(item.RadioID).valueChanges().subscribe(
      (result) => {
        console.log(result);
        this.selectedRadio = result;
        PlayerService.setRadio({radio: result, user: item});
        console.log('radio Setted !')
      }
    );
  }

  getRadioUrl() {
    console.log('getTrustedUrl');
    console.log(this.sanitizer.bypassSecurityTrustUrl(this.radioUrl));
    return this.sanitizer.bypassSecurityTrustUrl(this.radioUrl);
  }

  searchUser(searchString) {
    /*this._usersEvent = this._userCollection.where('Name', '===', searchString).valueChanges().subscribe(
      (result) => {
        this.radiosList = result;
        console.log(this.radiosList);
      }
    );*/
    this._userCollection = this.db.collection("users", ref => ref.where('Name', '>=', searchString));
    this.getUserList();
  }

  getUserList() {
    this._usersEvent = this._userCollection.valueChanges().subscribe(
      (result) => {
        this.radiosList = result;
        console.log(this.radiosList);
      }
    );
  }

  resetUserList() {
    this._userCollection = this.db.collection("users");
    this.getUserList();
  }

}
