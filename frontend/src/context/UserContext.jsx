import { createContext, useContext, useState } from "react";
import { helpFetch } from "../helper/helpFetch.js";

const userContext = createContext();

export const useAuth = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("useUser debe ir dentro de un userContextProvider");
  }

  return context;
};

export const UserContextProvider = ({ children }) => {
  const { post } = helpFetch();
  const [data, setData] = useState();

  const createdUser = async (user) => {
    try {
      const res = await post("http://localhost:4000/api/user/register", {
        body: user,
      });

      if (res.status === 200) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider value={{ createdUser }}>
      {children}
    </userContext.Provider>
  );
};
