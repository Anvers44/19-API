import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from './userlist.module.css'


const UserList = () => {
    const [data,setData]=useState([])
    const [error,setError]=useState(null)

    useEffect(()=>{
    const getData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res=>{
                setData(res.data)
            }).catch(err=>{
                setError(err)

        })
    }
    getData()
    },[])
    return (
        <div className={style.list}>
            {data.map(d=>(
                <div key={d.id}>
                    <div>
                        <div>Name : {d.name}</div>
                        <div>Username : {d.username}</div>
                        <div>Email : {d.email}</div>
                    </div>
                    <div>
                        <div>Phone : {d.phone}</div>
                        <div>Website : {d.website}</div>
                    </div>
                    <div>
                        <div>Company : {d.company.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
