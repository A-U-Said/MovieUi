import { RoleView } from "./roles.types";

export interface UserStartupView {
  id: string;
  email: string;
  username: string;
  userDetails: UserDetailsView;
  accountPasswordCompromised: boolean;
  passwordCompromisedWarningDate: string | null;
  roles: RoleView[];
}

export interface UserDetailsView {
  active: boolean;
  firstName: string;
  lastName: string;
}