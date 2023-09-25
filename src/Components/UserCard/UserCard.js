import React from 'react'
import './UserCard.css'
import { Link } from 'react-router-dom'
const UserCard = ({user}) => {
return (
    
    <div className="card">
    <img src={user.gender=="homme"?"https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000":"https://img.freepik.com/photos-premium/portrait-femme-race-blanche-joyeuse_53876-73173.jpg?w=2000"} alt="userPhoto" style={{width:"100%",height:"233px"}} />
    <h1>Nom: {user.name}</h1>
    <p className="Mail">Adress Mail: {user.email}</p>
    <p>Age:{user.age}</p>
   
    <Link to={`/user/${user.id}`}><p><button>Details</button></p></Link>
</div>
    
)
}

export default UserCard