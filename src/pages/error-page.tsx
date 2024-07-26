import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Errorpage.css';

export default function ErrorPage() {
  const error :any = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <img src='../MagicMackCarLogo.jpg' alt="Mack Logo" className="error-image" />
      <h1 className="error-title">PAGE NOT FOUND</h1>
      <p className="error-message">The page you are looking for doesn't exist or has been moved</p>
      <Link to="/" className="home-button">Back to Home</Link>
    </div>
  );
}





