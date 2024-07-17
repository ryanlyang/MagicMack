import { useRouteError } from "react-router-dom";
import Header from "../components/Header.tsx";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error :any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      
      <Header></Header>
      <div className='top_container'>
        <Link to={`/`}>
          <img id="Magic-Mack-logo" src="/MagicMackLogo.png" alt="Mack Logo" className="MagicMackLogo"
                  ></img>
        </Link>
        <img id="Auto-Detail-logo" src="/AutoDetailing1.png" alt="Auto Logo" className="AutoDetail"
                ></img>
      </div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}