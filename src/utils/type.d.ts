export interface Stats {
    stats: {
        followers: number,
        following: number
    }
}

export interface User {
    user: {
        name: string,
        avatar: string
    }
}
export  interface State {
    user: User,
    stats: Stats
}

export interface Action {
    type: string,
    payload: any
}

export type StatsType = 'followers' | 'following';