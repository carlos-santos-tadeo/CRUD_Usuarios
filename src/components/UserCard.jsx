import React from "react";
import Swal from "sweetalert2";

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  function alertDeleteUser(userId, firstName, lastName) {
    const user = firstName + " " + lastName;
    Swal.fire({
      title: "¿Está seguro de eliminar a: \n " + user + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6BA9B8",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(userId);
        Swal.fire({
          title: "Usuario eliminado correctamente",
          icon: "success",
        });
      }
    });
  }

  return (
    <article className="dark:bg-[#c0c0c0] group duration-1000 bg-[#f5f5f5] mb-5 mt-5 grid justify-center rounded-[5px] font-sen mx-2 py-3 px-2">
      <div className="py-3 mx-5 mb-5 duration-1000 dark:group-hover:bg-[#2b5555] group-hover:bg-[#3672A0]/80 bg-[#8BBCBC] dark:bg-[#2e6188] rounded-[5px] shadow-black/40 shadow-lg dark:shadow-3xl dark:shadow-black/70">
        <img
          className="w-[125px] h-[150px] object-cover mx-auto rounded-md"
          src={user.image_url ? user.image_url : "/images/noProfile.jpg"}
          alt="User image"
        />
      </div>
      <h3
        className="border-b-2 text-center font-semibold text-[#3672A0] dark:text-[#1B1B1E] text-lg border-[#74849E]"
        style={{ textShadow: "6px -3px 3px rgba(0, 0, 0, 0.2)" }}
      >
        {user.first_name} {user.last_name}
      </h3>
      <ul className="flex flex-col gap-5 pt-6 pb-3">
        <li>
          <div className="flex justify-between w-[263px]">
            <h4 className=" text-lg font-semibold text-[#74849E] dark:text-[#3672A0]">
              Correo:{" "}
            </h4>
            <button
              className=" mr-50 hover:w-7 text-red-800 duration-1000 dark:border-red-800 dark:border-2 rounded-md hover:bg-red-700 hover:text-white hover:rounded-md"
              onClick={() =>
                alertDeleteUser(user.id, user.first_name, user.last_name)
              }
            >
              <i className=" text-xl bx bx-trash"></i>
            </button>
          </div>
          <span
            className="font-semibold text-[#3672A0] dark:text-black"
            style={{ textShadow: "10px -4px 3px rgba(0, 0, 0, 0.2)" }}
          >
            {user.email}
          </span>
          <hr className="border-[#74849E] border-[1px]" />
        </li>
        <li>
          <div className="flex justify-between">
            <h4 className=" text-lg text-[#74849E] dark:text-[#3672A0] font-semibold">
              Cumpleaños:{" "}
            </h4>
            <button
              className=" hover:w-7 hover:bg-purple-p hover:text-white hover:rounded-md dark:border-purple-p duration-1000 rounded-md dark:border-2"
              onClick={() => handleClickEdit(user)}
            >
              <i className="text-xl bx bx-pencil "></i>
            </button>
          </div>
          <span
            className=" border-b-2 text-[#3672A0] dark:text-black border-[#74849E] font-semibold"
            style={{ textShadow: "10px -2px 3px rgba(0, 0, 0, 0.2)" }}
          >
            <i className="text-xl bx bx-gift "></i>
            {user.birthday}
          </span>
        </li>
      </ul>
    </article>
  );
};

export default UserCard;
