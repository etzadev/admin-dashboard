import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Cards() {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch("https://apimocha.com/etzadev/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {cards &&
        cards.length > 0 &&
        cards.map((card) => <Card key={card._id} card={card} />)}
    </>
  );
}
