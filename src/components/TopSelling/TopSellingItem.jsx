import { PropTypes } from "prop-types";

export default function TopSellingItem({ item }) {
  return (
    <tr>
      <th scope="row">
        <a href="#">
          <img src={item.preview} alt={item.name} />
        </a>
      </th>
      <td>
        <a className="text-primary fw-bold" href="#">
          {item.name}
        </a>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td className="fw-bold">{item.sold}</td>
      <td>${(item.price * item.sold).toLocaleString("es-MX")}</td>
    </tr>
  );
}

TopSellingItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
  }),
};
