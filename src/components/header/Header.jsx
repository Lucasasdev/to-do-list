import "./Header.css";

const Header = ({ children }) => {
  return (
    <div>
      <h1 className="header">{children}</h1>
    </div>
  );
};

export default Header;
