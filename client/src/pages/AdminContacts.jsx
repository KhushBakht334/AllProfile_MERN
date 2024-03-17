import React , {useEffect, useState} from 'react'
import { useAuth } from '../store/auth'

export const AdminContacts = () => {
  const [allContacts, setAllContacts]=useState([]);
    const {authToken}=useAuth();
    const getAllContacts=async()=>{
        try {
            const response=await fetch("http://127.0.0.1:2000/api/admin/contacts",{
                method:"GET",
                headers:{
                    Authorization:authToken
                }
            })
            const data=await response.json();
            console.log(data);
            setAllContacts(data);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteContacts=async(id)=>{
        try {
            const response=await fetch(`http://127.0.0.1:2000/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authToken
                }
            })
            const data=await response.json();
            console.log(data);
            getAllContacts();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllContacts();
    }, [])
    
  return (
    <>
    <div className='container'>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
        {allContacts.map((e, i)=>{
            return <tr key={i}>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.message}</td>
                <td>Update</td>
                <td><button onClick={()=>deleteContacts(e._id)}>Delete</button></td>
            </tr>
        })}
                </table>
            </div>
    </>
  )
}
