import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("email")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);
  return <Outlet />;
};

export default App;
