import {Action, State, Stats, StatsType} from "../utils/type";
import {CHANGE_STATS} from "../actions/statsActions";

export const initialStats: Stats = {
    stats: {
        followers: 0,
        following: 0
    }
}

export const statsReducer = (stats = initialStats, action: Action): Stats => {
    switch (action.type) {
        case CHANGE_STATS:
            const statsType = action.payload.statsType as StatsType
            let res = stats[statsType] + (action.payload.isIncrement ? 1 : -1);
            res = res < 0 ? 0 : res
            return {...stats, [statsType] : res}

        default:
            return stats
    }
}