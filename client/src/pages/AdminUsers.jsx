import React , {useEffect, useState} from 'react'
import { useAuth } from '../store/auth'
import {Link} from "react-router-dom";

export const AdminUsers = () => {
    const [allUsers, setAllUsers]=useState([]);
    const {authToken}=useAuth();
    const getAllUsers=async()=>{
        try {
            const response=await fetch("http://127.0.0.1:2000/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization:authToken
                }
            })
            const data=await response.json();
            console.log(data);
            setAllUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
  const deleteUser=async(id)=>{
    try {
        const response=await fetch(`http://127.0.0.1:2000/api/admin/users/delete/${id}`,{
            method:"DELETE",
            headers:{
                Authorization:authToken
            }
        })
        const data=await response.json();
        console.log(data);
        getAllUsers();
    } catch (error) {
        console.log(error);
    }
  }
    useEffect(() => {
        getAllUsers();
    }, [])
  return (
    <>
    <div className='container'>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    <tbody>
        {allUsers.map((e, i)=>{
            return <tr key={i}>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td><Link to={`/admin/user/${e._id}/edit`}>Update</Link></td>
                <td><button onClick={()=>deleteUser(e._id)}>Delete</button></td>
            </tr>
        })}
        </tbody>
                </table>
            </div>
    </>
  )
}
