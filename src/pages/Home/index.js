import { useState, useEffect } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { API_GET_DATA } from "../../global/constants";

async function fetchData(setData) {
  const response = await fetch(API_GET_DATA);
  const { data } = await response.json();
  // console.log(data);
  setData(data);
}

const Home = () => {
  const [data, setData] = useState([]);

  // Fetch data when the browser reloads
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
