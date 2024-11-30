import * as echarts from "echarts";
import { useEffect } from "react";

export default function BudgetChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#budgetChart")).setOption({
      legend: {
        data: ["Presupuesto Asignado", "Gasto Real"],
      },
      radar: {
        shape: "circle",
        indicator: [
          {
            name: "Ventas",
            max: 6500,
          },
          {
            name: "Administración",
            max: 16000,
          },
          {
            name: "Información",
            max: 30000,
          },
          {
            name: "Soporte al cliente",
            max: 38000,
          },
          {
            name: "Desarrollo",
            max: 52000,
          },
          {
            name: "Marketing",
            max: 25000,
          },
        ],
      },
      series: [
        {
          name: "Presupuesto vs Gastos",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Presupuesto Asignado",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Gasto Real",
            },
          ],
        },
      ],
    });
  }, []);

  return (
    <div
      id="budgetChart"
      style={{ minHeight: "400px", display: "flex", justifyContent: "center" }}
      className="echart"
    ></div>
  );
}
