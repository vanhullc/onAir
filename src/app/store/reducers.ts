import { ActionReducerMap } from '@ngrx/store';
import { UserState, userInitialState } from './user/user.model';
import { UsersState, usersInitialState } from './users/users.model';
import { RadioState, radioInitialState } from './radio/radio.model';
import { RadiosState, radiosInitialState } from './radios/radios.model';
import { userReducer } from './user/user.reducer';
import { usersReducer } from './users/users.reducer';
import { radioReducer } from './radio/radio.reducer';
import { radiosReducer } from './radios/radios.reducer';

export interface State {
    user: UserState,
    users: UsersState,
    radio: RadioState,
    radios: RadiosState
}

export const reducers: ActionReducerMap<State> = {
    user: userReducer,
    users: usersReducer,
    radio: radioReducer,
    radios: radiosReducer
}

export const reducerInitialState: State = {
    user: userInitialState,
    users: usersInitialState,
    radio: radioInitialState,
    radios: radiosInitialState
}