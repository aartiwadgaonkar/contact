import { ADD_CONATCT_FAIL, ADD_CONATCT_REQUIEST, ADD_CONATCT_SUCCESS, GET_ALL_CONATCT_FAIL, GET_ALL_CONATCT_REQUIEST, GET_ALL_CONATCT_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER, USER_REGISTER_FAIL, USER_REGISTER_REQUEST } from "../constants/userConstants";

export const userReducer = (
    state = { reduxContacts: [] },
    { type, payload }
) => {
    switch (type) {
        case USER_REGISTER_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_REGISTER: return {
            ...state,
            registered: true,
            loading: false
        }
        case USER_REGISTER_FAIL: return {
            ...state,
            error: payload,
            loading: false
        }

        case GET_ALL_USER_REQUEST: return {
            ...state,
            loading: true
        }
        case GET_ALL_USER_SUCCESS: return {
            ...state,
            loading: false,
            reduxUsers: payload
        }
        case GET_ALL_USER_FAIL: return {
            ...state,
            loading: false,
            error: payload
        }

        case USER_LOGIN_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            login: payload
        }
        case USER_LOGIN_FAIL: return {
            ...state,
            loading: false,
            error: payload
        }
        case ADD_CONATCT_REQUIEST: return {
            ...state,
            loading: true
        }
        case ADD_CONATCT_SUCCESS: return {
            ...state,
            loading: false,
            contactAdded: true
        }
        case ADD_CONATCT_FAIL: return {
            ...state,
            loading: false,
            error: payload
        }
        case GET_ALL_CONATCT_REQUIEST: return {
            ...state,
            loading: true
        }
        case GET_ALL_CONATCT_SUCCESS: return {
            ...state,
            reduxContacts: payload,
            loading: false
        }
        case GET_ALL_CONATCT_FAIL: return {
            ...state,
            loading: false,
            error: payload
        }


        case USER_LOGOUT: return { ...state, login: false }

        default: return state
    }
} 