import { isAuthenticated } from "../utils/auth";

const ProtectedRoute = ({ children, openLogin }) => {
  if (!isAuthenticated()) {
    openLogin(true);
    return null;
  }
  return children;
};

export default ProtectedRoute;
