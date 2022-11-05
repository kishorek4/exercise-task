import { useState, useEffect } from "react";

const Home = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      getData();
    }
  }, []);
  function getData() {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((result) =>
        setData((prevState) => (data = [...prevState, result]))
      );
  }
  return (
    <>
      <ol>
        {data.map((item) => (
          <li>{item.fact}</li>
        ))}
      </ol>
    </>
  );
};
export default Home;
