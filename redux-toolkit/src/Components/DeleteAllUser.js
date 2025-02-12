import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteUser } from '../Store/Slices/UserSlice'

const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const ClearUsers = () => {
    dispatch(DeleteUser());
  } 

  return (
    <div>
      <button className="btn-slice" onClick={()=> ClearUsers()}>Delete All Users</button>
    </div>
  )
}

export default DeleteAllUser
