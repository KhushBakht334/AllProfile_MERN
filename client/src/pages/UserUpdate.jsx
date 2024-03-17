import React from 'react'
import { useState , useEffect} from 'react'
import { useAuth } from '../store/auth'
import { useParams } from 'react-router-dom'
export const UserUpdate = () => {
  const params=useParams();
    const {authToken }=useAuth();
    const [userdata, setUserdata]=useState({
        username:"",
        email:"",
        phone:"",
    })
    const handleInput=async(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUserdata({
            ...userdata,
            [name]:value
        })
    }
    const getUserById=async()=>{
      try {
        const response=await fetch(`http://127.0.0.1:2000/api/admin/user/${params.id}`,{
          method:'GET',
          headers:{
            Authorization:authToken
          }
        })
        const data=await response.json();
        console.log(data);
        setUserdata(data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getUserById();
    }, [])
    const submitForm=async(e)=>{
      e.preventDefault();
      try {
        const resposne=await fetch(`http://127.0.0.1:2000/api/admin/users/update/${params.id}`,{
          method:"PATCH",
          headers:{
            "Content-Type": "application/json",
            Authorization:authToken
          },
          body: JSON.stringify(userdata),
        })
        console.log(resposne);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
     <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update Information</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={submitForm}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={userdata.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={userdata.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={userdata.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  )
}
