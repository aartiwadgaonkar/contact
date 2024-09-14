import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllContacts, getAllUserAction } from '../redux/actions/userAction'
export default function Home() {
    const actionDispatch = useDispatch()
    const { reduxContacts } = useSelector(state => state.allUsers)
    useEffect(() => {
        actionDispatch(getAllContacts())
    }, [])
    return <>
        <div className="container">
            <div className="row">


                {
                    reduxContacts.map(item => <div className="col-sm-3">

                        <div class="card my-3">
                            <div class="card-body">
                                <img
                                    src={item.image}
                                    alt=""
                                    className='img-fluid rounded-circle'
                                    height={100}
                                    width={100}
                                />
                                <h4>{item.name}</h4>
                                <p>{item.mobile}</p>
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>
        </div>
    </>
}

// import React from 'react'

// export default function Home() {
//     return (
//         <div>Home</div>
//     )
// }

