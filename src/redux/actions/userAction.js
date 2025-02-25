import axios from "axios"
import { ADD_CONATCT_FAIL, ADD_CONATCT_REQUIEST, ADD_CONATCT_SUCCESS, GET_ALL_CONATCT_FAIL, GET_ALL_CONATCT_REQUIEST, GET_ALL_CONATCT_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER, USER_REGISTER_FAIL, USER_REGISTER_REQUEST } from "../constants/userConstants"

export const registerUserAction = userData => async dispatch => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const { data } = await axios.post("http://localhost:5000/users", userData)
        dispatch({ type: USER_REGISTER })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}
export const getAllUserAction = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_USER_REQUEST })
        const { data } = await axios.get("http://localhost:5000/users")
        dispatch({ type: GET_ALL_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_USER_FAIL, payload: error.message })
    }
}
export const userLoginAction = (loginData) => async dispatch => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data } = await axios.get("http://localhost:5000/users")

        const result = data.find(item => item.email == loginData.email && item.password === loginData.password)

        if (!result) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: "Invalid Email Or Password"
            })
            return
        }
        localStorage.setItem("auth", JSON.stringify(result))
        dispatch({ type: USER_LOGIN_SUCCESS, payload: result })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
    }
}
export const addContactAction = (contactData) => async dispatch => {
    try {
        dispatch({ type: ADD_CONATCT_REQUIEST })
        const { data } = await axios.post("http://localhost:5000/contacts", contactData)
        dispatch({ type: ADD_CONATCT_SUCCESS })
    } catch (error) {
        dispatch({ type: ADD_CONATCT_FAIL, payload: error.message })
    }
}

export const getAllContacts = id => async dispatch => {
    try {
        dispatch({ type: GET_ALL_CONATCT_REQUIEST })
        const { data } = await axios.get("http://localhost:5000/contacts")
        const filterData = data.filter(item => item.userId == id)
        dispatch({ type: GET_ALL_CONATCT_SUCCESS, payload: filterData })

    } catch (error) {
        dispatch({ type: GET_ALL_CONATCT_FAIL, payload: error })

    }
}
export const logoutAction = id => async dispatch => {
    dispatch({ type: USER_LOGOUT })
}
