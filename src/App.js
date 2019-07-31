import React, { useState, useEffect } from "react";
import Copyright from "./components/copyright";
import Explanation from "./components/explanation";
import Img from "./components/img";
import Title from "./components/title"
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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
      <Title title={data.title} />
      <Copyright copy={data.copyright} />
      <div className="bottom">
      <Img url={data.url} />
      <Explanation explain={data.explanation}/>
      </div>
    </div>
  );
}

export default App;

// const alanPham = [
//   {
//     copyright: "Alan Pham",
//     date: "2019-07-31",
//     explanation:
//       "To some, this nebula looks like the head of a fish. However, this colorful cosmic portrait really features glowing gas and obscuring dust clouds in IC 1795, a star forming region in the northern constellation Cassiopeia. The nebula's colors were created by adopting the Hubble color palette for mapping narrow emission from oxygen, hydrogen, and sulfur atoms to blue, green and red colors, and further blending the data with images of the region recorded through broadband filters. Not far on the sky from the famous Double Star Cluster in Perseus, IC 1795 is itself located next to IC 1805, the Heart Nebula, as part of a complex of star forming regions that lie at the edge of a large molecular cloud. Located just over 6,000 light-years away, the larger star forming complex sprawls along the Perseus spiral arm of our Milky Way Galaxy. At that distance, this picture would span about 70 light-years across IC 1795.   Astrophysicists: Browse 2,000+ codes in the Astrophysics Source Code Library",
//     hdurl:
//       "https://apod.nasa.gov/apod/image/1907/FishheadNebula_Pham_2401.jpg",
//     media_type: "image",
//     service_version: "v1",
//     title: "IC 1795: The Fishhead Nebula",
//     url: "https://apod.nasa.gov/apod/image/1907/FishheadNebula_Pham_960.jpg"
//   }
// ];