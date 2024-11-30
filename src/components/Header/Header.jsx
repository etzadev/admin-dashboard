import "./header.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* Logo */}
      <Logo />

      {/* Search bar */}
      <SearchBar />

      {/* Nav */}
      <Nav />
    </header>
  );
}
