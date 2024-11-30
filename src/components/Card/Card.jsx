import PropTypes from "prop-types";
import CardFilter from "./CardFilter";
import { useState } from "react";
import "./card.css";

export default function Card({ card }) {
  const [filter, setFilter] = useState("Hoy");

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="col-xxl-4 col-md-6">
      <div className={`card info-card ${card.name}-card`}>
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            {card.name} <span>| {filter}</span>
          </h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={card.icon}></i>
            </div>
            <div className="ps-3">
              <h6>
                {card.name === "ganancias"
                  ? "$ " + card.amount.toLocaleString("es-MX")
                  : card.amount.toLocaleString("es-MX")}
              </h6>
              <span
                className={`${
                  card.percentage > 0 ? "text-success" : "text-danger"
                } small pt-1 fw-bold`}
              >
                {card.percentage * 100}%
              </span>
              <span className="text-muted small pt-2 ps-1">
                {card.percentage > 0 ? "Ganancias" : "Perdidas"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
