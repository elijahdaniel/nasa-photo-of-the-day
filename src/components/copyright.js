import React from "react";

export default function Copyright({ copy }) {
  return (
    <span id="copy">
      Copyright:{" "}
      <a className="App-link" href="https://www.astrobin.com/users/PlanetOrion/">{copy}</a>
    </span>
  );
}
