import React from "react";
import NavigationComponent from "./components/Nav";
import CarouselComponent from "./components/Carousel";
import Search from "./components/Search";
import "./App.css";
import Card from "./components/Card";
const data = [
  {
    name: "Beautiful NAme Here",
    address: "1723 Dr Martin L King Jr Blvd"
  },
  {
    name: "Beautiful Name Here",
    address: "1723 Dr Martin L King Jr Blvd"
  },
  {
    name: "Beautiful Name Here",
    address: "1723 Dr Martin L King Jr Blvd"
  },
  {
    name: "Beautiful Name Here",
    address: "1723 Dr Martin L King Jr Blvd"
  },
  {
    name: "Beautiful Name Here",
    address: "1723 Dr Martin L King Jr Blvd"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount() {}

  displayInfo = () => {
    const { locations } = this.state;
    const container = [];
    locations.forEach(place => {
      container.push(<Card name={place.name} address={place.address} />);
    });

    return <div className="main-card-container">{container}</div>;
  };

  handleSearch = () => {
    this.setState({ locations: data });
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
