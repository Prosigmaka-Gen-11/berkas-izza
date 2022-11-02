import { createContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
      const parsedUserData = JSON.parse(savedUserData);
      return parsedUserData;
    } else {
      return {};
    }
  });
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      return savedToken;
    } else {
      return null;
    }
  });

  function handleDataLogin(data) {
    setUserData(data);
    setToken(data.token);
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  }

  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUserData({});
    setToken(null);
  }
  const isLogin = token != null;
  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        token,
        setToken,
        handleDataLogin,
        logout,
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
