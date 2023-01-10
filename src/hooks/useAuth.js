import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
