import "./navbarR.css";

const NavbarR = () => {
  return (
    <nav className="navbarR">
      <p
        style={{
          fontSize: "38px",
          fontWeight: "600",
          fontFamily: "Dancing Script",
        }}
      >
        Steakhouse
      </p>
      <ul className="NavbarENla">
        <li>
          <a href="#">home</a>
        </li>

        <li>
          <a href="#">abaut us</a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">event</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarR;
