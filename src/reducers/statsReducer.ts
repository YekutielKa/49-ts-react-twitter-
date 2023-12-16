import {Action, State, Stats, StatsType} from "../utils/type";
import {CHANGE_STATS} from "../actions/statsActions";

export const initialStats: Stats = {
    stats: {
        followers: 0,
        following: 0
    }
}

export const statsReducer = (state = initialStats, action: Action): State => {
    switch (action.type) {
        case CHANGE_STATS:
            const statsType = action.payload.statsType as StatsType
            let res = state.stats[statsType] + (action.payload.isIncrement ? 1 : -1);
            res = res < 0 ? 0 : res
            // return {...state, stats: {...state, [statsType]: res}}
            return {...state, stats: {[statsType] : res}}

        default:
            return state
    }
}