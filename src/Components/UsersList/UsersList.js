
import UserCard from '../UserCard/UserCard'
import './UsersList.css'
const UserList = ({users}) => {
 console.log(users)
  return (
    <div style={{display:"flex", flexWrap:'wrap', justifyContent:"space-around"}}>
      
      {/*mapping data imported  */}
      {users.length!=0?users.map(user=><UserCard user={user} key={user.id}/>):<h1>Il n'y a aucun utilisateur à afficher.</h1>}</div>
  )
}

export default UserList