const userReducer = ( state = {user: {}, login: false}, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                login: true
            }
    }
}

export default userReducer