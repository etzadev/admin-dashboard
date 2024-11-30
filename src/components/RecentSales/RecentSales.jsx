import { useEffect, useState } from "react";
import CardFilter from "../Card/CardFilter";
import RecentSalesTable from "./RecentSalesTable";
import "./recentSales.css";

export default function RecentSales() {
  const [filter, setFilter] = useState("Hoy");
  const [items, setItems] = useState([]);

  const fetchData = () => {
    fetch("https://apimocha.com/etzadev/recentsales")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Ventas Recientes <span>| {filter}</span>
        </h5>
        <RecentSalesTable items={items} />
        {console.log(items)}
      </div>
    </div>
  );
}
