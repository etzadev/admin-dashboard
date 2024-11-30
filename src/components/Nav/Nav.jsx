import "./nav.css";
import NavAvatar from "./NavAvatar";
import NavMessage from "./NavMessage";
import NavNotification from "./NavNotification";

export default function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotification />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  );
}
