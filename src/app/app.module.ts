import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserEffects } from './store/user/user.effects';
import { UsersEffects } from './store/users/users.effects';
import { RadioEffects } from './store/radio/radio.effects';
import { RadiosEffects } from './store/radios/radios.effects';
import { UserService, UserRequestService } from './store/user/user.service';
import { UserActions } from './store/user/user.actions';
import { UsersService, UsersRequestService } from './store/users/users.service';
import { UsersActions } from './store/users/users.actions';
import { RadioService, RadioRequestService } from './store/radio/radio.service';
import { RadioActions } from './store/radio/radio.actions';
import { RadiosService, RadiosRequestService } from './store/radios/radios.service';
import { RadiosActions } from './store/radios/radios.actions';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { reducerInitialState, reducers } from './store/reducers';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    EffectsModule.forRoot([
      UserEffects,
      UsersEffects,
      RadioEffects,
      RadiosEffects
    ]),
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    StoreModule.forRoot(reducers, {
      initialState: reducerInitialState
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [
    UserService,
    UserRequestService,
    UserActions,
    UsersService,
    UsersRequestService,
    UsersActions,
    RadioService,
    RadioRequestService,
    RadioActions,
    RadiosService,
    RadiosRequestService,
    RadiosActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
