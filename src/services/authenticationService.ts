import store from "@/store";
import tokenStorage from "./tokenStorage";
import { Action } from "@reduxjs/toolkit";


const logout = () => {
  tokenStorage.removeTokens();

  store.dispatch<Action>({
    type: "LOGOUT"
  });
};


const authenticationService = {
  logout,
};


export default authenticationService;