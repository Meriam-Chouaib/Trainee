import { Welcome } from '../components/Welcome/Welcome'
import {  getPersistData } from '../utils/localstorage';
import { User, users } from '../utils/fakeData';

const ProfilePage = () => {
      const userStored:User = getPersistData('user',true)
      const foundUser = users.find(user => user.email.toLowerCase() === userStored.email.toLowerCase());

  return (
    <> 
    {foundUser &&  <Welcome name={foundUser.name} lastname={foundUser.lastname} address={foundUser.address} />
}
</>
  )
}

export default ProfilePage