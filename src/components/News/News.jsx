import { useEffect, useState } from "react";
import "./news.css";
import CardFilter from "../Card/CardFilter";
import NewsPostItem from "./NewsPostItem";

export default function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Hoy");

  const fetchData = () => {
    fetch("https://apimocha.com/etzadev/news")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Noticias &amp; Actualizaciones <span>| {filter}</span>
        </h5>
        <div className="news">
          {console.log(news)}
          {news &&
            news.length > 0 &&
            news.map((item) => <NewsPostItem key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
}
