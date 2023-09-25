import React, { useState } from 'react'
import './NavB.css'
import { Button } from 'react-bootstrap'
import usersData from '../../Data'
const NavB = ({users,setUsers}) => {
    //creating state to stock informations
    const [minAge,setMinAge]=useState(0)
    const [hometown,setHomeTown]=useState("")
    const [gender,setGender]=useState("")
  
    const handleAge=(e)=>{
        setMinAge(e.target.value)
        
    }
    //function clear
    const handleClear=()=>{
         setUsers(usersData)
         setGender("")
         setHomeTown("")
         setMinAge(0)
        
    }
    
    //function to handle filter
    const handleFilter=async()=>{
      var u=usersData.filter(element=>element.age>=minAge)      
        
        if(gender!==""){
          u=u.filter(element=>element.gender===gender)
        }
        if(hometown!==""){
          u=u.filter(element=>element.hometown===hometown)
        }
        setUsers(u)
        
    }
console.log(users)
  return (
    
        <div className="header">
 <div className="logo"><h1>Wi<span>TH</span></h1></div> 
 <div className="navbar">
    <label>min age:</label>
    <input type="range" id="rangeInput" name="rangeInput" value={minAge} min="0" max="100" onChange={(e)=>handleAge(e)}
        />     
        <output>{minAge}</output>                                                  

        <div className="hex-select">
  <select name="example" id="example" onChange={(e)=>setGender(e.target.value)} value={gender}>
    <option value="" >Select gender...</option>
    <option value='homme'>Homme</option>
    <option value="femme">Femme</option>
    
  </select>

</div>
<div className="hex-select hex-select-js">
  <select name="example" id="example-custom" onChange={(e)=>setHomeTown(e.target.value)} value={hometown}>
    <option value=""> select hometown</option>
    <option value="tunis">tunis</option>
    <option value="kef">kef</option>
    <option value="nabeul">nabeul</option>
    
  </select>
</div>
   
<Button className='button1' onClick={()=>handleFilter()}>
     filtrer
     </Button>
   <Button variant='danger' className='button2' onClick={()=>handleClear()}>
     clear
     </Button>
 </div>
</div> 
    
  )
}

export default NavB