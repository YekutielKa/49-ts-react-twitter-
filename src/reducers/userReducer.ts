import {Action, State, User} from "../utils/type";
import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";

export const initialUser: User = {
    user: {
        name: 'Monster',
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid'
    },
}

export const userReducer = (state = initialUser, action: Action): State => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}}
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}}
        default:
            return state
    }
}