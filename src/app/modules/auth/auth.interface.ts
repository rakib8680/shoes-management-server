import { USER_ROLE } from "./auth.constant";

export type TUser = {
  name: string;
  role?: string;
  email: string;
  password: string;
};

export type TUserRole = keyof typeof USER_ROLE;