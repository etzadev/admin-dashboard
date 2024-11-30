import { PropTypes } from "prop-types";

export default function RecentActivityItem({ item }) {
  return (
    <div className="activity-item d-flex">
      <div className="activity-label">{item.time}</div>
      <i
        className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}
      ></i>
      {item.highlight === "" ? (
        <div className="activity-content">{item.content}</div>
      ) : (
        <div className="activity-content">
          {item.content.substring(0, item.content.indexOf(item.highlight))}
          <a className="fw-bold text-dark" href="#">
            {item.highlight}
          </a>
          {item.content.slice(
            item.content.indexOf(item.highlight) + item.highlight.length,
            -1
          )}
        </div>
      )}
    </div>
  );
}

RecentActivityItem.propTypes = {
  item: PropTypes.shape({
    time: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    highlight: PropTypes.bool.isRequired,
  }),
};