import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Details.css'
const Details = ({users}) => {
    
    // lire le parametre ID
    let {id}=useParams()
    const [user,setUser]=useState({})
    
    //filtrer l'utilisateur par l'ID
    useEffect(() => {
      setUser(users.filter(el=>el.id==id))
    }, [users,id])
    
    console.log(users,user)
  return (
    <div className="container">
      <div className="left-side" style={user[0]?.gender=="homme"?{backgroundImage:"url(https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000)"}:{backgroundImage:"url(https://img.freepik.com/photos-premium/portrait-femme-race-blanche-joyeuse_53876-73173.jpg?w=2000)"}}>
      </div>
      <div className="right-side">
        <p id="gender">{user[0]?.gender}</p>
        <h1 id="name">Nom:{user[0]?.name}</h1>
        <p id="email">Adress Mail:{user[0]?.email}</p>
        <div className="age">
          <p id="age1">Age:{user[0]?.age}</p>
          <p id="age1">Hometown: {user[0]?.hometown}</p>
          
        </div>
        <Link to={'/'}><button className="cart-btn">
          <p id="btn-text">Retourner a La Liste</p>
        </button></Link>     
      </div>
    </div>
  )
}

export default Details