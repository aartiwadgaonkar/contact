import React from 'react'
import { useSelector } from "react-redux"

export default function LoginOnly({ element }) {
    const { login } = useSelector(state => state.allUsers)
    // return login ? element : "UnAuthorized access"

    return login
        ? login.admin
            ? "dash boar page"
            : element
        : "un autharized access"
}
