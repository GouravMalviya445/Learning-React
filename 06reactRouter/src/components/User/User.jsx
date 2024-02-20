import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
    return (
        <div className='text-center bg-cyan-100 text-2xl font-bold p-4 mx-4'>User: {userId}</div>
    )
}

export default User