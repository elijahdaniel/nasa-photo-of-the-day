import React, { useState, useEffect } from "react";
import Copyright from "./components/copyright";
import Explanation from "./components/explanation";
import Img from "./components/img";
import Title from "./components/title";
import "./App.css";
import axios from "axios";
import {
  Header,
  Bottom,
  BottomL,
  BottomR,
  AlignText,
  Center
} from "./components/styles";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=INWhlK0FxCxJ92WchVebMAdeGZxchjhIvmR31LLu"
      )
      .then(info => {
        setData(info.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="App">
      <Header>
        <h1>NASA's Astronomy Picture of the Day</h1>
      </Header>
      <Bottom>
        <div className="bottom">
          <BottomL>
            <section className="bottomLeft">
              <Img url={data.hdurl} />
            </section>
          </BottomL>
          <BottomR>
            <section className="bottomRight">
              <Center>
                <Title title={data.title} />
              
              <Copyright copy={data.copyright} />
              </Center>
              <AlignText>
                <Explanation explain={data.explanation} />
              </AlignText>
            </section>
          </BottomR>
        </div>
      </Bottom>
    </div>
  );
}

export default App;
