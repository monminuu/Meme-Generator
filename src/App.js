import React from "react";
import Header from "./component/Header";
import Meme from "./component/Meme";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Api from "./component/Api";
import Pictures from "./component/Pictures";

function App() {
  return (
    <div>
      <Header />
      <Meme />
      <Api />
        <center>
            <Pictures topText = "MyTopText" bottomText = "MyBottomText" imageName = "Bad-Luck-Brian" fontName = "Impact"/>
        </center>
    </div>
  );
}

export default App;
