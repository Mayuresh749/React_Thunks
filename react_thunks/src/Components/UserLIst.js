import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchUsers,userAdd } from "../store";


function UserList()
{
   const dispatch =useDispatch(); 
   
   useEffect(() => {

   dispatch(fetchUsers())
      .unwrap()
      .then((res) =>console.log(res))
      .catch()
   },[dispatch])

   const {isLoading,data,error} = useSelector(state => state.users)

   const handleClick = ()=>{
    dispatch(userAdd())
   }
   
     
  if(isLoading)
     {
      return(
      <div><h1>Loading Content</h1></div>
      ) 
     }

    const renderusers = data.map((user) => {
      return( 
      <div key={user.id} className="mb-2  border rounded">
         <div className="flex p-2 justify-between items-center cursor-pointer bg-indigo-100">
           {user.name}
         </div>
       </div>
      )
    })
     
return (
   <div>
        <h1 style={{color: "#7CB9E8"}}>Users List</h1>
        <button type="button" className="btn btn-outline-success mb-5" onClick={handleClick}>Add User</button>
        <div>{error || renderusers } </div>
   </div>
     )
}

export default UserList;