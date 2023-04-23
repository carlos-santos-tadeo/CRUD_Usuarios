import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users, deleteUser, handleClickEdit }) => {
  return (
    <section className='grid justify-center gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_300px)]'>
      
        {
          users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} handleClickEdit={handleClickEdit} />)
        }

      
    </section>
  )
}

export default UserList