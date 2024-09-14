import React from 'react'
import { useSelector } from 'react-redux'

export default function AdminOnly({ element }) {

    const { login } = useSelector(state => state.allUsers)
    return login && login.admin ? element : "unautharized access"
}
