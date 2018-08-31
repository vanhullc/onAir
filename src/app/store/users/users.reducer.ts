import { ActionPayload } from '../action';
import { UsersActions } from './users.actions';
import { usersInitialState } from './users.model';


export function usersReducer(state: any, action: ActionPayload) {
    switch (action.type) {
        case UsersActions.GET_HOME:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case UsersActions.GET_HOME_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case UsersActions.GET_HOME_FAIL:
            return Object.assign({}, state, usersInitialState, {
                _error: action.payload
            });
        case UsersActions.SEARCH:
            return Object.assign({}, state, {
                _loading: true,
                _error: false
            });
        case UsersActions.SEARCH_SUCCESS:
            return Object.assign({}, state, action.payload, {
                _error: false,
                _loading: false
            });
        case UsersActions.SEARCH_FAIL:
            return Object.assign({}, state, usersInitialState, {
                _error: action.payload
            });
        default:
            return state;
    }
}