import React from 'react'
import Swal from 'sweetalert2';

const UserCard = ({ user, deleteUser, handleClickEdit }) => {


  function alertDeleteUser(userId, firstName, lastName) {
    const user = firstName + " " + lastName
    Swal.fire({
      title: '¿Está seguro de eliminar a: \n ' + user + "?",
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
    <article className=' mb-5 mt-5 grid justify-center border-[2px] border-black/50 bg-slate-400/50 dark:border-white dark:border-[1px] dark:text-slate-300 dark:bg-transparent rounded-[5px] font-sen mx-2 py-3 px-2'>
      <div className='py-3'>
        <img className="w-[125px] h-[150px] object-cover mx-auto rounded-md" src={user.image_url ? user.image_url : "/images/noProfile.jpg"} alt="User image" />
      </div>
      <h3 className='border-b-2 text-center font-semibold text-lg border-slate-600 dark:border-white'>{user.first_name} {user.last_name}</h3>
      <ul className='flex flex-col gap-5 pt-6 pb-3'>
        <li>
          <div className='flex justify-between w-[263px]'>
            <h4 className=' text-lg text-black dark:text-purple-p'>Correo: </h4>
            <button className=' mr-50 hover:w-7 text-red-800 dark:border-red-800 dark:border-2 rounded-md hover:bg-red-700 hover:text-white hover:rounded-md' onClick={() => alertDeleteUser(user.id, user.first_name, user.last_name)}>
              <i className=' text-xl bx bx-trash'></i>
            </button>
          </div>
          <span className='font-semibold'>{user.email}</span><hr className='border-slate-600 border-[1px] dark:border-white' />
        </li>
        <li>
          <div className='flex justify-between'>
            <h4 className=' text-lg text-black dark:text-purple-p'>Cumpleaños: </h4>
            <button className=' hover:w-7 hover:bg-purple-p hover:text-white hover:rounded-md dark:border-purple-p rounded-md dark:border-2' onClick={() => handleClickEdit(user)}>
              <i className='text-xl bx bx-pencil '></i>
            </button>
          </div>
          <span className=' border-b-2 border-slate-600 dark:border-white font-semibold'>
            <i className='text-xl bx bx-gift '></i>
            {user.birthday}
          </span>
        </li>
      </ul>

    </article>
  )
}

export default UserCard
