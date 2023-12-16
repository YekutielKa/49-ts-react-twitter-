import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State, User} from "../utils/type";
import {changeAvatar, changeName} from "../actions/userActions";

interface Props {
    size?: 'small'
}

const Avatar = ({size}: Props) => {
    const {user} = useSelector<State, User>(state => state.user)
    const dispatch = useDispatch()
    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url') as string;
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                dispatch(changeName(name!));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar} alt={user.name}
        />
    );
};

export default Avatar;