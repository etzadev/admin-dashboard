import { useEffect, useState } from "react";
import "./topSelling.css";
import CardFilter from "./../Card/CardFilter";
import TopSellingItem from "./TopSellingItem";

export default function TopSelling() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Hoy");

  const fetchData = () => {
    fetch("https://apimocha.com/etzadev/topselling")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Más Vendidos <span>| {filter}</span>
        </h5>
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Vendidos</th>
              <th scope="col">Ganancias</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.length > 0 &&
              items.map((item) => (
                <TopSellingItem key={item._id} item={item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
