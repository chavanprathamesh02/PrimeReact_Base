import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-column align-items-center justify-content-center min-h-screen">
      <i className="pi pi-exclamation-triangle" style={{ fontSize: "4rem" }} />

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>The page you are looking for does not exist.</p>

      <Button
        label="Go to Dashboard"
        icon="pi pi-home"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default NotFound;
