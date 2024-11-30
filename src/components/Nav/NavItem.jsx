import PropTypes from "prop-types";

export default function NavItem({ item }) {
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" href="#">
        <i className={item.icon}></i>
        <span>{item.name}</span>
      </a>
    </li>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
