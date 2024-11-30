import { PropTypes } from "prop-types";

export default function NewsPostItem({ item }) {
  return (
    <div className="post-item clearfix">
      <img src={item.img} alt={item.title} />
      <h4>
        <a href="#">{item.title}</a>
      </h4>
      <p>{item.subtitle}...</p>
    </div>
  );
}

NewsPostItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};
