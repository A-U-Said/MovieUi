
export enum RoleType {
  Administrator = 0,
  Developer = 1,
  User = 2
}

export interface RoleView {
  id: string;
  name: string | null;
  roleType: RoleType;
  description: string;
}