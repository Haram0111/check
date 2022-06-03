import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(Response => {
                console.log(Response.data)
            });
    }, []);

    return(
        <h1>Users</h1>
    );
};

export default Users;