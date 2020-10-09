import React from "react";
import imageInSrc from "./imageInSrc.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw", margin: 10 }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={imageInSrc} style={{ width: 380, height: 600 }} />
        <img src="/imageInPublic.jpg" style={{ height: 600 }} />
      </div>
      <video style={{ width: 320, height: 240 }} controls>
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
