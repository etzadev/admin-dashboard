import { useEffect, useState } from "react";
import CardFilter from "../Card/CardFilter";
import RecentActivityItem from "./RecentActivityItem";
import "./recentActivity.css";

export default function RecentActivity() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Hoy");

  const fetchData = () => {
    fetch("https://apimocha.com/etzadev/recentactivity")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Actividad Reciente <span>| {filter}</span>
        </h5>
        <div className="activity">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <RecentActivityItem key={item._id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
