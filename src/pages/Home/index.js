import { useState, useEffect } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { API_GET_DATA} from "../../global/constants"

const Home = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(API_GET_DATA);
    const data = await response.json();
    // console.log(data);
  }

  // Fetch data when the 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
