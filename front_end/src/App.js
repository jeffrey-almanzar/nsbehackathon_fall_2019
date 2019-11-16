import React from "react";
import NavigationComponent from "./components/Nav";
import CarouselComponent from "./components/Carousel";
import About from "./components/About";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <CarouselComponent />
        <About />
        <div className="chat-box">
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/5345a277-1bfb-4ab8-beb2-af29c5666950"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default App;
