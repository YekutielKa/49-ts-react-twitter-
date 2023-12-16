import React from 'react';
import Avatar from "./Avatar";
import {useDispatch, useSelector} from "react-redux";
import {State, Stats, User} from "../utils/type";
import {changeStats} from "../actions/statsActions";

const UserStats = () => {
    const {stats} = useSelector<State, Stats>(state => state.stats)
    const {user} = useSelector<State, User>(state => state.user)
    const dispatch = useDispatch()

    return (
        <div className='user-stats'>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => dispatch(changeStats('followers', true))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('followers', false));
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => dispatch(changeStats('following', true))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('following', false));
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default UserStats;