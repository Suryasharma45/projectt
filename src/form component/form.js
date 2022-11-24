import React, { useState } from 'react'
import Table from "./table";


 import FormData from './formData';

function Form() {
  const userData=[{
    id:1,name:'surya',date:"1/3/2020", Number:"1345533334", location:"chennai"},
   { id:2,name:'sharma',date:"7/3/2020", Number:"2345566775", location:"chennai"}]
   const[user,setuser]=useState(userData)

   const addUser =(users)=>{
    user.id= user.length +1;
    setuser([...user,users])
   }

  return(



        
  
        <div>
           < FormData  addUser={addUser}/>
          <Table  user={user}/>
        </div>
  )
}

export default Form
