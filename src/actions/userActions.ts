export const CHANGE_NAME = 'CHANGE_NAME'

export const CHANGE_AVATAR = 'CHANGE_AVATAR'

export const changeName = (name: string) => ({
    type: CHANGE_NAME,
    payload: name
})

export const changeAvatar = (avatar: string) => ({
    type: CHANGE_AVATAR,
    payload: avatar
})