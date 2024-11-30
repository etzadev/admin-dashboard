import { useState } from "react";
import CardFilter from "../Card/CardFilter";
import WebTrafficChart from "./WebTrafficChart";

export default function WebTraffic() {
  const [filter, setFilter] = useState("Hoy");

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Tráfico web <span>| {filter}</span>
        </h5>
        <WebTrafficChart />
      </div>
    </div>
  );
}
