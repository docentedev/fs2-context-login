import { postLogin } from ".";

const useLogin = () => {
  const login = async (data: { email: string; password: string }) => {
    return postLogin(data);
  };
  return { login };
};
export default useLogin;
