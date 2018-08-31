import { RadioState } from '../radio/radio.model';

export class UserState {
    _error: any;
    _loading: boolean;
    _action: string;
    id: string;
    name: string;
    imageUrl: string;
    pinedSearch: string[];
    radioID: string;
    radio: RadioState;
    StarredID: string[];
}

export const userInitialState: UserState = {
    _error: false,
    _loading: false,
    _action: null,
    id: null,
    name: null,
    imageUrl: null,
    pinedSearch: null,
    radioID: null,
    radio: null,
    StarredID: null
}