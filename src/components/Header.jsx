import React from 'react'

const Header = ({ setIsShowForm, setIsDark, isDark }) => {

  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
  }

  const handleChangeTheme = () => {
    setIsDark((isDark) => !isDark)
    
  }

  console.log(isDark)


  return (
    <header className='flex justify-between p-3 sm:py-5 md:mx-5 lg:mx-16 lg:py-12 pb-[10%]'>
      <h1 className='font-bold sm:text-3xl lg:text-5xl dark:text-white rounded-md dark:animate-pulse'>Usuarios</h1>
      <div className=' flex flex-col gap-2'>
        <button onClick={handleClickShowModal} className='bg-purple-p rounded text-white p-2 hover:bg-purple-p/90 transition-colors min-w-[135px] text-xs sm:text-base lg:text-xl lg:font-semibold'><i className='bx bx-plus'></i>Crear nuevo usuario</button>
        <button onClick={handleChangeTheme} className='flex gap-2 font-semibold text-sm mx-auto animate-pulse hover:bg-black hover:text-white hover:shadow-black hover:shadow-lg rounded-md px-2 dark:hover:border-b-2 dark:hover:border-b-purple-700'>
          <i className={`flex rounded-lg w-[20px] h-[20px] justify-center items-center  bg-black text-white ${isDark ? "text-[25px] bx bx-sun" : "bx bx-moon"}`}></i>
          <span className='dark:text-white'>{isDark ? "Light mode" : "Dark mode"}</span>
        </button>
      </div>
    </header>
  )
}

export default Header