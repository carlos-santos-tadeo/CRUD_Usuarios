import React from "react";

const UsersDefault = ({ createDefaultUsers }) => {
  return (
    <div className=" z-0 flex justify-center animate-bounce">
      <button
        onClick={createDefaultUsers}
        className="bg-[#8BBCBC]/70 font-semibold text-xl text-[#fafcfc] rounded-md p-2 hover:text-white hover:bg-[#2c5677]"
      >
        Crear usuarios por defecto
      </button>
    </div>
  );
};

export default UsersDefault;
