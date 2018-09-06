import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {

  public radio: any;
  public user: any;
  public radioUrl = null;
  public page: number = 1;

  private _usersEvent: any;
  private _userCollection: any;
  private _radioEvent: any;
  private _radioCollection: any;

  constructor(
      private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // this.usersService.getHome({});
    this._radioEvent = PlayerService.changeEvent.subscribe(
        (event) => {
            console.log(event);
            if (event.on && (!this.user || event.user.radioID !== this.user.radioID)) {
                this.radio = event.radio;
                this.user = event.user;
                this.setRadio();
            } else if (event.user.radioID !== this.user.radioID) {
                this.radio = null;
                this.user = null;
                this.radioUrl = null;
            }
        }
    );
  }

  setRadio() {
    let index = Math.floor(Math.random() * 10) + 1;
    if (this.radio['timeline'] && this.radio['timeline'][0]) {
        this.radioUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.radio['timeline'][0].playlistUrl.replace("playlist?", "embed/videoseries?") + "&autoplay=1&loop=1&index=" + index);
        console.log('radio Setted !')
        console.log(this.radioUrl);
    }
  }

  ngOnDestroy() {
      this._radioEvent.unsubscribe();
  }

}
