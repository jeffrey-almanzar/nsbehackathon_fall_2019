import React from "react";
import NavigationComponent from "./components/Nav";
import CarouselComponent from "./components/Carousel";
import Search from "./components/Search";
import "./App.css";
import Card from "./components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    //CapitalOne API
    // fetch('http://api.reimaginebanking.com/')
    // .then((resp) => resp.json)                    //Transform the data into JSON format
    // .then(function(data) {
      
    // })
  }

  displayInfo = () => {
    const { locations } = this.state;
    const container = [];
    locations.forEach(place => {
      container.push(<Card name={place.name} address={place.address} key={place.id} />);
    });

    return <div className="main-card-container">{container}</div>;
  };

  handleSearch = () => {
    fetch("http://localhost:3001/locations")
      .then(response => response.json())
      .then(data => {
        this.setState({ locations: data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { locations } = this.state;
    return (
      <div>
        <NavigationComponent />
        <CarouselComponent />
        <Search handleClick={this.handleSearch} />
        {locations.length ? this.displayInfo() : null}
      </div>
    );
  }
}

export default App;
