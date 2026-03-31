import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const auth = sessionStorage.getItem("auth");
  const correctHash = "4fa922a1ea16ddee6d45ff821c65113294b969b6134050c047b05aee3a683b3b";

  if (auth !== correctHash) {
    return <Navigate to="/login" />;
  }

  return children;
}