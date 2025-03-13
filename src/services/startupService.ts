import { httpAction, authenticationClient } from "@/clients";
import { UserStartupView } from "@/sharedTypes/users";
import { authStartupError, authStartupStart, authStartupSuccess } from "@/store/sharedReducers/currentUserReducer";
import { tokenStorage } from ".";


const getCurrentUser = () : Promise<UserStartupView> => {

  const { sub } = tokenStorage.getDecodedAccessToken() || {};

  if (!sub) {
    throw new Error("No authentication token was found.");
  }

  return httpAction<UserStartupView>(
    () => authenticationClient.get(`startup`),
    {
      onStart: authStartupStart,
      onSuccess: authStartupSuccess,
      onError: authStartupError
    }    
  );
};


const startupService = {
  getCurrentUser
};

export default startupService;