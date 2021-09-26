import { useAppSelector } from "../init/hooks";

export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);

  return { isAuthenticated: !!auth.email };
}
