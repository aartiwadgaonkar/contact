import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from '../redux/actions/userAction'

export default function Navbar() {
    const actionDispatch = useDispatch()
    const { login } = useSelector(state => state.allUsers)
    const handleLogout = () => {
        actionDispatch(logoutAction())
        localStorage.removeItem("auth")
    }
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">

            <Link to="/" className="navbar-brand" >SKILLHUB</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                    <Link to="/" className="nav-link active" >
                        Home
                    </Link>
                    {
                        login && login.admin && <>
                            <Link to="/admin/dashboard" className="nav-link" >
                                Dashboard
                            </Link>
                        </>
                    }
                    {
                        login && !login.admin && <>
                            <Link to="/user/add-contact" className="nav-link" >
                                Add Contact
                            </Link>
                            <Link to="/user/account" className="nav-link" >
                                Account
                            </Link>

                        </>
                    }
                    {
                        !login && <>
                            <Link to="/login" className="nav-link" >
                                Login
                            </Link>
                            <Link to="/register" className="nav-link" >
                                Register
                            </Link>
                        </>
                    }


                    {
                        login &&
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                {login.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><button onClick={handleLogout} class="dropdown-item">Logout</button></li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </div>
    </nav>
}
