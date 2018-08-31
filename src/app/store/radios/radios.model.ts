import { RadioState } from '../radio/radio.model';

export class RadiosState {
    _error: false;
    _loading: false;
    _action: null;
    list: RadioState[];
}

export const radiosInitialState: RadiosState = {
    _error: false,
    _loading: false,
    _action: null,
    list: null
}