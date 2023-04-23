import React from 'react'
import Swal from 'sweetalert2';

const UserCard = ({ user, deleteUser, handleClickEdit }) => {


  function alertDeleteUser(userId, firstName, lastName) {
    const user = firstName + lastName
    Swal.fire({
      title: '¿Esta seguro de eliminar a: \n ' + user + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6BA9B8',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(userId)
        Swal.fire({
          title: "Usuario eliminado correctamente",
          icon: 'success',
        })
      }
    });
  };



  return (
    <article className='grid justify-center bg-slate-200/80 dark:bg-slate-900 dark:text-slate-300 rounded-lg font-sen mx-[3px] py-3 shadow-purple-p shadow-lg dark:shadow-violet-900/50 dark:shadow-xs'>
      <div className='py-3'>
        <img className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md" src={user.image_url ? user.image_url : "/images/noProfile.jpg"} alt="User image" />
      </div>
      <h3 className=' font-semibold text-lg shadow-lg shadow-purple-p rounded-md'>{user.first_name} {user.last_name}</h3>
      <ul className='flex flex-col gap-5 pt-2'>
        <li>
          <div className='flex justify-between w-[263px]'>
            <h4 className=' text-normal text-black/50 dark:text-purple-p'>Correo: </h4>
            <button className='mr-5 hover:animate-bounce hover:w-7 text-red-800 dark:border-red-800 dark:border-2 rounded-md hover:bg-red-700 hover:text-white hover:rounded-md' onClick={() => alertDeleteUser(user.id, user.first_name, user.last_name)}>
              {/* deleteUser(user.id) */}
              <i className=' text-xl bx bx-trash'></i>
            </button>
          </div>
          <span className=' border-b-2 border-purple-p'>{user.email}</span>
        </li>
        <li>
          <div className='flex justify-between'>
            <h4 className=' text-normal text-black/50 dark:text-purple-p'>Cumpleaños: </h4>
            <button className='mr-5 hover:animate-bounce hover:w-7 hover:bg-black hover:text-white hover:rounded-md dark:border-purple-p rounded-md dark:border-2' onClick={() => handleClickEdit(user)}>
              <i className='text-xl bx bx-pencil'></i>
            </button>
          </div>
          <span className=' border-b-2 border-purple-p'>
            <i className='text-xl bx bx-gift '></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <div>
      </div>
    </article>
  )
}

export default UserCard