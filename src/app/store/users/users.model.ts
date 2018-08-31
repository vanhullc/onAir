import { UserState } from '../user/user.model';

export class UsersState {
    _error: any;
    _loading: boolean;
    _action: string;
    list: UserState[];
}

export const usersInitialState: UsersState = {
    _error: false,
    _loading: false,
    _action: null,
    list: null,  
}