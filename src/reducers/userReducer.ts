import {Action, User} from "../utils/type";
import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";

export const initialUser: User = {
    user: {
        name: 'Monster',
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid'
    },
}

export const userReducer = (user = initialUser, action: Action): User => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...user, user: action.payload || user.user.name}
        case CHANGE_AVATAR:
            return {...user, user: action.payload || user.user.avatar}
        default:
            return user
    }
}