import { PropTypes } from "prop-types";

export default function CardFilter({ filterChange }) {
  return (
    <div className="filter">
      <a className="icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filtrar</h6>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => filterChange("Hoy")}
          >
            Hoy
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => filterChange("Mes")}
          >
            Este Mes
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => filterChange("Año")}
          >
            Este Año
          </a>
        </li>
      </ul>
    </div>
  );
}

CardFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};
