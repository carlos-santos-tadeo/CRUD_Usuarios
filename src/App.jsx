import { useEffect, useState } from "react";
import {
  BASE_URL,
  DEFAULT_VALUES,
  EMILIANO,
  NIKOLA,
  RONY,
  JACKIE,
} from "./constans.js";
import "./App.css";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";
import { data } from "autoprefixer";
import UsersDefault from "./components/UsersDefault.jsx";

function App() {
  // const BASE_URL = "https://users-crud.academlo.tech";

  // const DEFAULT_VALUES = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   birthday: "",
  //   image_url: "",
  // };

  const [isDark, setIsDark] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserIdToEdit, setIsUserIdToEdit] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (!data.birthday) {
      data.birthday = null;
    }

    if (!data.image_url) {
      data.image_url = null;
    }

    if (isUserIdToEdit) {
      alertEditUser(data);
    } else {
      createUser(data);
    }
  };

  const createDefaultUsers = () => {
    createUser(EMILIANO);
    createUser(RONY);
    createUser(NIKOLA);
    createUser(JACKIE);
  };

  const createUser = (data) => {
    const URL = BASE_URL + "/users/";
    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        alertCreateUser();
        setIsShowForm(!isShowForm);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;

    axios
      .delete(URL)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`;

    axios
      .patch(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset(data);
    setIsUserIdToEdit(data.id);
  };

  function alertEditUser(data) {
    Swal.fire({
      title: "¿Está seguro de guardar cambios?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6BA9B8",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        editUser(data);
        Swal.fire({
          title: "Cambios efectuados correctamente",
          icon: "success",
        });
      }
    });
  }

  function alertCreateUser() {
    Swal.fire({
      title: "Usuario Creado correctamente",
      icon: "success",
    });
  }

  useEffect(() => {
    getAllUsers();
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const hasFunctionExecuted = localStorage.getItem("hasFunctionExecuted");

    if (!hasFunctionExecuted) {
      // Aquí coloca la función que deseas ejecutar una sola vez
      createDefaultUsers();

      // Guarda la información en el almacenamiento local para que no se ejecute nuevamente
      localStorage.setItem("hasFunctionExecuted", true);

      //muestra mensaje
      const timer = setTimeout(() => {
        Swal.fire({
          title:
            "Al iniciar por primera vez la app se crean 4 usuarios por defecto",
          icon: "success",
        });
      }, 1000);
    }
  }, [isDark]);

  return (
    <main className="font-sans bg-[#3672a0] duration-1000 dark:bg-[#1b1b1e]  bg-cover min-h-screen">
      <Header
        setIsShowForm={setIsShowForm}
        setIsDark={setIsDark}
        isDark={isDark}
      />
      <Modal
        register={register}
        handleSubmit={handleSubmit}
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        submit={submit}
        reset={reset}
        setIsUserIdToEdit={setIsUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit}
        errors={errors}
      />
      {users.length === 0 ? (
        <UsersDefault createDefaultUsers={createDefaultUsers} />
      ) : (
        <UserList
          users={users}
          deleteUser={deleteUser}
          handleClickEdit={handleClickEdit}
        />
      )}
    </main>
  );
}

export default App;
