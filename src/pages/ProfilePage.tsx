import React from 'react'
import { Welcome } from '../components/Welcome/Welcome'
import {  getPersistData } from '../utils/localstorage';
import { User, users } from '../utils/fakeData';

const ProfilePage = () => {

      const userStored:User = getPersistData('user',true)
      const foundUser = users.find(user => user.email.toLowerCase() === userStored.email.toLowerCase());
if(foundUser){
    console.log("user.email",foundUser.email);
    console.log("user.name",foundUser.name);
}

     
  return (
    <> 
    {foundUser &&  <Welcome name={foundUser.name} lastname={foundUser.lastname} address={foundUser.address} />
}
</>
  )
}

export default ProfilePage