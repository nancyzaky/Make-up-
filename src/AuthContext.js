import React, { usestate, useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
