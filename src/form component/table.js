import React from 'react'

function Table(props) {
  return (
    <div>
        <table className='table m-5' id='tables'>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>date</th>
                <th scope='col'>number</th>
                <th scope='col'>location</th>   
            </tr>
            <tbody scope="row">
                {props.user.length>0?(
                    props.user.map((users)=>(
                        <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.date}</td>
                        <td>{users.Number}</td>
                        <td>{users.location}</td>

                        
                    </tr>
                   
                    
                   ) )
                ):(
                    <tr>
                        <td colspan={2}>No user</td>
                    </tr>
                )
                }
                </tbody>  
        </table>
      
    </div>
  )
}

export default Table
