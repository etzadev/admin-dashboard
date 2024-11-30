import { useState } from "react";
import CardFilter from "../Card/CardFilter";
import ReportCharts from "../ReportCharts/ReportCharts";

export default function Reports() {
  const [filter, setFilter] = useState("Hoy");

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Reportes <span>/ {filter}</span>
        </h5>
        <ReportCharts />
      </div>
    </div>
  );
}
