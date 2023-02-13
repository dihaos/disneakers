import "./Header.scss";
import cart from "../../assets/cart3.svg";
import search from "../../assets/search.svg";
import person from "../../assets/person.svg";
import heart from "../../assets/heart.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header--section">
        <span>NEW</span>
        <span>КАТАЛОГ</span>
        <span>О НАС</span>
      </div>
      <div className="name">DISNEAKERS</div>
      <div className="header--section">
        <img alt="search" src={search} />
        <img alt="person" src={person} />
        <img alt="heart" src={heart} />
        <img alt="cart" src={cart} />
      </div>
    </div>
  );
};

export default Header;
