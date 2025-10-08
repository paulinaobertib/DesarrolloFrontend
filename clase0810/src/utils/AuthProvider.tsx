import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext.ts";
import type { User } from "../Types/User";




export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = (id: number, name: string, email: string) => setUser({ id, name, email });
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}