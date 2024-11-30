import { useState } from "react";
import CardFilter from "./../Card/CardFilter";
import BudgetChart from "./BudgetChart";

export default function BudgetReport() {
  const [filter, setFilter] = useState("Hoy");

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Informe Presupuestario <span>| {filter}</span>
        </h5>
        <BudgetChart />
      </div>
    </div>
  );
}
