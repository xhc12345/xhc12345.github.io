import { Link } from "react-router";

const Navbar = (props: { items: { link: string; text: string }[] }) => {
  return (
    <nav
      style={{
        borderBottom: "1.5px solid grey",
        paddingBottom: "1em",
        margin: "1em",
      }}
    >
      {props.items.map(({ link, text }, index) => (
        <Link
          to={link}
          key={`navbar-item-${index}`}
          style={{ marginLeft: "1.5em" }}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
