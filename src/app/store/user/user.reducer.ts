import { ActionPayload } from '../action';
import { UserActions } from './user.actions';
import { userInitialState } from './user.model';


export function userReducer(state: any, action: ActionPayload) {
    switch (action.type) {
        case UserActions.LOGIN:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case UserActions.LOGIN_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case UserActions.LOGIN_FAIL:
            return Object.assign({}, state, userInitialState, {
                _error: action.payload
            });
        case UserActions.SIGNUP:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case UserActions.SIGNUP_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case UserActions.SIGNUP_FAIL:
            return Object.assign({}, state, userInitialState, {
                _error: action.payload
            });
        case UserActions.SET:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case UserActions.SET_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case UserActions.SET_FAIL:
            return Object.assign({}, state, userInitialState, {
                _error: action.payload
            });
        default:
            return state;
    }
}