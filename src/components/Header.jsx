import React from "react";

const Header = ({ setIsShowForm, setIsDark, isDark }) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
  };

  const handleChangeTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <header className="flex justify-between px-6 pt-5 sm:py-5 md:mx-5 lg:mx-16 lg:py-12 pb-[5%]">
      <h1 className="font-bold text-[20px] sm:text-3xl lg:text-5xl text-[#FCFAFA] dark:text-[#CCCCCC] rounded-md">
        Usuarios
      </h1>
      <div className=" flex flex-col gap-2">
        <button
          onClick={handleClickShowModal}
          className="bg-[#FCFAFA] dark:bg-[#6B6A72] rounded text-[#3672A0] dark:text-[#fcfafa] p-2 hover:bg-[#8BBCBC] hover:text-[#fcfafa] transition-colors min-w-[135px] text-sm sm:text-base lg:text-xl lg:font-semibold dark:hover:bg-[#828688]"
        >
          <i className="bx bx-plus"></i>Crear nuevo usuario
        </button>
        <button
          onClick={handleChangeTheme}
          className="flex hover:bg-[#8BBCBC] dark:hover:bg-slate-400 gap-2 font-semibold text-sm mx-auto rounded-md px-2 bg-[#2c5677] dark:bg-[#828688]"
        >
          <i
            className={`flex rounded-lg w-[20px] h-[20px] justify-center items-center text-white ${
              isDark ? "text-[17px] bx bx-sun" : "bx bx-moon"
            }`}
          ></i>
          <span className="dark:text-white text-[#FCFAFA]">
            {isDark ? "Light mode" : "Dark mode"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
