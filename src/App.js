import React, { useState, useEffect } from "react";
import Copyright from "./components/copyright";
import Explanation from "./components/explanation";
import Img from "./components/img";
import Title from "./components/title";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=INWhlK0FxCxJ92WchVebMAdeGZxchjhIvmR31LLu")
      .then(info => {
        setData(info.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>NASA's Astronomy Picture of the Day</h1>
      <div className="bottom">
        <section className="bottomLeft">
          <Img url={data.hdurl} />
        </section>
        <section className="bottomRight">
          <Title title={data.title} />
          <Copyright copy={data.copyright} />
          <Explanation explain={data.explanation} />
        </section>
      </div>
    </div>
  );
}

export default App;