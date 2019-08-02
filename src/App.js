import React, { useState, useEffect } from "react";
import Copyright from "./components/copyright";
import Explanation from "./components/explanation";
import Img from "./components/img";
import Title from "./components/title";
import Day from "./components/date";
import "./App.css";
import axios from "axios";
import {
  Header,
  Contain,
  BoxOne,
  BoxTwo,
  TitleBox,
  Para,
  Copy
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
        <h3>NASA's Astronomy Picture of the Day</h3>
      </Header>
      <Contain>
        <BoxOne>
          <Img url={data.hdurl} />
          <TitleBox>
            <Title title={data.title} />
          </TitleBox>
        </BoxOne>
        <BoxTwo>
          <Copy>
            <Day date={data.date}/>
          <Copyright copy={data.copyright} />
          </Copy>
          <Para>
          <Explanation explain={data.explanation} />
          </Para>
        </BoxTwo>
      </Contain>
    </div>
  );
}

export default App;
