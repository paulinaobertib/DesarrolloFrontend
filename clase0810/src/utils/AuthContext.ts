import { createContext } from "react";
import type { User } from "../Types/User";

type Ctx = { user: User | null; login: (id: number, name: string, email: string) => void; logout: () => void };

export const AuthContext = createContext<Ctx | null>(null);