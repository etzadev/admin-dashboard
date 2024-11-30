import { PropTypes } from "prop-types";

export default function RecentSalesTable({ items }) {
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending":
        return "warning";
      case "Rejected":
        return "danger";
      default:
        return "success";
    }
  };

  return (
    <table className="table table-borderless datatable">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cliente</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Estatus</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <tr key={item._id}>
              <th scope="row">
                <a href="#">{item.number}</a>
              </th>
              <td>{item.customer}</td>
              <td>
                <a href="#" className="text-primary">
                  {item.product}
                </a>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

RecentSalesTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
