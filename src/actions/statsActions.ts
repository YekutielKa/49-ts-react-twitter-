import {StatsType} from "../utils/type";

export const CHANGE_STATS = "CHANGE_STATS";

export const changeStats = (statsType: StatsType, isIncrement: boolean) => ({
    type: CHANGE_STATS,
    payload: {
        statsType, isIncrement
    }
})