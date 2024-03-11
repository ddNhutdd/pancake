import { useContext } from "react";
import { AlertContext } from "src/context/alert-container";


const useAlert = () => {
  const conext = useContext(AlertContext);

  if (!conext) throw new Error("useAlert must be used within AlertProvider");

  return conext;
};

export default useAlert;