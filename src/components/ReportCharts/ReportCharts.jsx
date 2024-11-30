import { useState } from "react";
import Chart from "react-apexcharts";

export default function ReportCharts() {
  const [data, setData] = useState({
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 82, 56],
      },
      {
        name: "Ganancias",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "clientes",
        data: [15, 11, 32, 18, 9, 24, 11],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-11-11T00:00:00.000Z",
          "2024-11-11T01:30:00.000Z",
          "2024-11-11T02:30:00.000Z",
          "2024-11-11T03:30:00.000Z",
          "2024-11-11T04:30:00.000Z",
          "2024-11-11T05:30:00.000Z",
          "2024-11-11T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}
