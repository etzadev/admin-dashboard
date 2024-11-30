import * as echarts from "echarts";
import { useEffect } from "react";

export default function WebTrafficChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: {
        name: "Acceso desde",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: "false",
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 1048,
            name: "Motor de Búsqueda",
          },
          {
            value: 735,
            name: "Directo",
          },
          {
            value: 580,
            name: "Redes Sociales",
          },
          {
            value: 484,
            name: "Email",
          },
          {
            value: 300,
            name: "Anuncios",
          },
        ],
      },
    });
  }, []);

  return (
    <div
      id="trafficChart"
      style={{ minHeight: "400px", display: "flex", justifyContent: "center" }}
      className="echart"
    ></div>
  );
}
