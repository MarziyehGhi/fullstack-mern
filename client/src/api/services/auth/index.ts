import { instance } from "@/api/constants";

export type SignUpDataType = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const signUpService = async (data: SignUpDataType) => {
  const res = await instance.post("/sign-up", data);
  return res.data;
};
