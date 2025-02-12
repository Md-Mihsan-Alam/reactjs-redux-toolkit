import React from 'react';
import DeleteAllUser from './DeleteAllUser';
import { fakeuserData } from '../API/Data';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Store/Slices/UserSlice';
import {MdDeleteForever} from 'react-icons/md';

const UserDetails = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
    // console.log(data);
  });

  const AddNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  }

  return (
    <div className="content">
    <div className="admin-table">
      <h1>A sample Project Made with Redux Toolkit</h1><br />
      <div className="admin-subtitle">List of User Details</div>
      <button className="add-btn" onClick={()=> AddNewUser(fakeuserData())}>Add New Users</button>
    </div>
    <ul>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className='delete-btn' onClick={() => deleteUser(id)}>
              <MdDeleteForever className='delete-icon'/>
            </button>
          </li>
        );
      })}
    </ul>
    <hr />
    <DeleteAllUser />
  </div>
  )
}

export default UserDetails
