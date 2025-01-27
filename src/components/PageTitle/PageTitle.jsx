import PropTypes from "prop-types";
import "./pageTitle.css";

export default function PageTitle({ page }) {
  return (
    <div className="page-title">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  );
}

PageTitle.propTypes = {
  page: PropTypes.string.isRequired,
};
