import { useStore } from "../context/useStore";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { registration } = useStore();
  if (registration === null || registration === '') return <Navigate to="/login" />;
  else return <>{children}</>;
}
