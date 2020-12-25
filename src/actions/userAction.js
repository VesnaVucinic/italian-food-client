export const loginUser = userObj => {
    return {
        type: 'LOGIN_USER',
        payload: userObj
    }
}