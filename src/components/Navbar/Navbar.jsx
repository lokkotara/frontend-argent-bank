import "./Navbar.scss";
import { getToken, logout } from "../../features/Login/loginSlice";
import { getUsername } from "../../features/User/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch    = useDispatch();
  const isToken     = useSelector(getToken);
  const navigate    = useNavigate();
  const username    = useSelector(getUsername);

  const handleAuthentication = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  const templateSignOut = () => {
    return (
      <div>
        <Link className="main-nav-item" to={`/profile`}>
          <i className="fa fa-user-circle"></i>
          {username}
        </Link>
        <Link className="main-nav-item" onClick={handleAuthentication}>
          <i className="fa fa-sign-out"></i>
          Sign out
        </Link>
      </div>
    );
  };

  const templateSignIn = () => (
    <div>
      <Link className="main-nav-item" to={`/login`}>
        Sign in
      </Link>
    </div>
  );

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={`/`}>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isToken ? templateSignOut() : templateSignIn()}
    </nav>
  );
}
