import { loginService } from "@/services";
import React, { useState } from "react";
import { defaultRoutes } from '@/configuration';
import { useLocation, useNavigate } from "react-router-dom";


type LoginCredentials = {
  username: string;
  password: string;
}


const Login: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginService
      .login(credentials.username, credentials.password)
      .then(() => {
        const preAuthLocation: Location = location.state?.preAuthLocation;
        if (preAuthLocation?.pathname) {
          navigate(preAuthLocation?.pathname);
        } else {
          navigate(defaultRoutes.home);
        }
      })
      .catch((error: unknown) => {
        console.log(error);
      })
      .finally(() => {

      });
  };

  return (
    <>
      <form 
        className="flex justify-center"
        onSubmit={handleLogin}
      >
          <div className="mb-6 flex flex-col flex-nowrap items-center">

            <label 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="uname"
            >
              <b>Username</b>
            </label>

            <input
              className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" 
              placeholder="Enter Username" 
              name="uname" 
              onChange={e => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              required 
            />

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="psw"
            >
              <b>Password</b>
            </label>
            <input 
              className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password" 
              placeholder="Enter Password" 
              name="psw" 
              onChange={e => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              required 
            />
              
            <button 
              className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
              type="submit"
            >
              Login
            </button>

          </div>

      </form>
    </>
  );
}


export default Login;