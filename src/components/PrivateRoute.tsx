import { useNavigate } from "react-router-dom"

function PrivateRoute({
  children,
  auth,
}: {
  children: JSX.Element;
  auth: boolean;
}) {

  const navigate = useNavigate();
  
  if (!auth) {
    navigate("/")
  }

  return children;
}

export { PrivateRoute };
