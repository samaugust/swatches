import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Swatch from "./components/Swatch";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Pagebar from "./components/Pagebar";

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
    currentColor: null
  };

  getColors = () => {
    return firebase
      .database()
      .ref("colors")
      .once("value")
      .then(snapshot => {
        const pages = this.paginate(snapshot.val());
        this.setState({ pages });
      });
  };

  paginate = arr => {
    const pages = [];
    while (arr.length) {
      pages.push(arr.splice(0, 12));
    }
    return pages;
  };

  getDisplayedSwatches = (pages, currentIndex) => {
    return pages[currentIndex].map(color => {
      return (
        <Swatch
          backgroundColor={color}
          changeCurrentColor={() => this.setState({ currentColor: color })}
        />
      );
    });
  };

  changeCurrentPage = pageNumber => {
    this.setState({ currentPage: pageNumber, currentColor: null });
  };

  clearCurrentColor = () => {
    this.setState({ currentColor: null });
  };

  getRandomColor = () => {
    const colors = this.state.pages.reduce(
      (accm, curr) => accm.concat(curr),
      []
    );
    const randomColorIdx = Math.floor(Math.random() * colors.length);
    const currentColor = colors[randomColorIdx];
    const currentPage = Math.ceil((randomColorIdx + 1) / 12);
    this.setState({ currentColor, currentPage });
  };

  componentDidMount() {
    this.getColors();
  }

  render() {
    console.log(this.state.currentColor);
    const { pages, currentPage, currentColor } = this.state;
    let displayedSwatches = pages.length
      ? this.getDisplayedSwatches(pages, currentPage - 1)
      : null;
    return (
      <div className="app">
        <Navbar />
        <Sidebar getRandomColor={this.getRandomColor} />
        <Content
          swatches={displayedSwatches}
          currentColor={currentColor}
          clearCurrentColor={this.clearCurrentColor}
        />
        {currentColor ? null : (
          <Pagebar
            currentPage={currentPage}
            pages={pages}
            changeCurrentPage={this.changeCurrentPage}
          />
        )}
      </div>
    );
  }
}

export default App;
