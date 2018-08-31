import { ActionPayload } from '../action';
import { RadiosActions } from './radios.actions';
import { radiosInitialState } from './radios.model';


export function radiosReducer(state: any, action: ActionPayload) {
    switch (action.type) {
        case RadiosActions.SEARCH:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case RadiosActions.SEARCH_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case RadiosActions.SEARCH_FAIL:
            return Object.assign({}, state, radiosInitialState, {
                _error: action.payload
            });
        default:
            return state;
    }
}