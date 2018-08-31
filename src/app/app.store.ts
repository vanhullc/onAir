import { UserState } from "./store/user/user.model";
import { UsersState } from "./store/users/users.model";
import { RadioState } from "./store/radio/radio.model";
import { RadiosState } from "./store/radios/radios.model";

/**
 * List of variables in the redux store
 */

export interface AppStore {
    readonly user: UserState;
    readonly users: UsersState;
    readonly radio: RadioState;
    readonly radios: RadiosState;
}