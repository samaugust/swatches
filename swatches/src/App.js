import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Swatch from "./components/Swatch";
import ListView from "./components/ListView";
import DetailedView from "./components/DetailedView";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import randomColorsGenerator from "./utils/randomColorsGenerator";
import paginate from "./utils/paginator";

const config = {
  apiKey: "AIzaSyBGJkZRL6pmlCvHYf_I6stnqEIw-0tNnIM",
  authDomain: "colors-b96f1.firebaseapp.com",
  databaseURL: "https://colors-b96f1.firebaseio.com",
  projectId: "colors-b96f1",
  storageBucket: "colors-b96f1.appspot.com",
  messagingSenderId: "481890122039"
};

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }

  state = {
    pages: [],
    currentPage: 1,
    selectedSwatch: null
  };

  getColorsFromDatabase = () => {
    return firebase
      .database()
      .ref("colors")
      .once("value")
      .then(snapshot => {
        const pages = paginate(snapshot.val());
        this.setState({ pages });
      });
  };

  getColorsFromScript = () => {
    const pages = paginate(randomColorsGenerator());
    this.setState({ pages });
  };

  getDisplayedSwatches = (pages, currentIndex) => {
    return pages[currentIndex].map(swatch => {
      return (
        <Swatch
          key={swatch}
          backgroundColor={swatch}
          changeCurrentSwatch={() => this.changeCurrentSwatch(swatch)}
        />
      );
    });
  };

  changeCurrentPage = pageNumber => {
    this.setState({ currentPage: pageNumber, selectedSwatch: null });
  };

  changeCurrentSwatch = swatch => {
    this.setState({ selectedSwatch: swatch });
  };

  clearSelectedSwatch = () => {
    this.setState({ selectedSwatch: null });
  };

  getRandomColor = () => {
    const colors = this.state.pages.reduce(
      (accm, curr) => accm.concat(curr),
      []
    );
    const randomColorIdx = Math.floor(Math.random() * colors.length);
    const selectedSwatch = colors[randomColorIdx];
    const currentPage = Math.ceil((randomColorIdx + 1) / 12);
    this.setState({ selectedSwatch, currentPage });
  };

  /*
  CHOOSE whether you want to get a fixed set of colors from a database,
  or a random set (of varying quantity) generated from a script. Just 
  uncomment one and comment out the other.
  */

  componentDidMount() {
    //this.getColorsFromDatabase();
    this.getColorsFromScript();
  }

  render() {
    const { pages, currentPage, selectedSwatch } = this.state;
    const displayedSwatches = pages.length
      ? this.getDisplayedSwatches(pages, currentPage - 1)
      : null;
    const content = selectedSwatch ? (
      <DetailedView
        selectedSwatch={selectedSwatch}
        clearSelectedSwatch={this.clearSelectedSwatch}
      />
    ) : (
      <ListView
        swatches={displayedSwatches}
        currentPage={currentPage}
        changeCurrentPage={this.changeCurrentPage}
        pages={pages}
      />
    );

    return (
      <div className="app">
        <Navbar />
        <Sidebar getRandomColor={this.getRandomColor} />
        {content}
      </div>
    );
  }
}

export default App;
