import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/gouravmalviya445`).then(res => res.json()).then(res => setData(res));
    // }, [setData])
    return (
        <div className='bg-gray-500 mx-4 p-5'>
            <h1 className='text-center pb-3 text-2xl font-bold text-cyan-400 border-b border-gray-400'>Username: {data.login}</h1>
            <div className='flex items-center justify-center'>
                <h2 className='mr-2 text-7xl font-bold text-yellow-300'>Profile Picture: </h2>
                <img src={data.avatar_url} alt="Github Avatar" width={300} className='m-3 rounded-full' />
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/gouravmalviya445');
    return response.json();
}