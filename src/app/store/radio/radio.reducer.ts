import { ActionPayload } from '../action';
import { RadioActions } from './radio.actions';
import { radioInitialState } from './radio.model';


export function radioReducer(state: any, action: ActionPayload) {
    switch (action.type) {
        case RadioActions.GET:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case RadioActions.GET_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case RadioActions.GET_FAIL:
            return Object.assign({}, state, radioInitialState, {
                _error: action.payload
            });
        case RadioActions.SET:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case RadioActions.SET_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case RadioActions.SET_FAIL:
            return Object.assign({}, state, radioInitialState, {
                _error: action.payload
            });
        default:
            return state;
    }
}