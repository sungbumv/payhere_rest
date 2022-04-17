import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post_axios()
{
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchUsers = async()=> {
            try{
                setError(null);
                setUsers(null);
                setLoading(true);

                const responseData = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(responseData.data);
            }catch(e)
            {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    } , []);

    if(loading) return <div>조회 진행중</div>;
    if(error) return <div>오류가 발생하였습니다.</div>;
    if(!users) return null;
    return(
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
    )
}

export default Post_axios;