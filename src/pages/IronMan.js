import React from "react";
import "../App.css";
import { Component, Fragment } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Carousel, Grid } from "@giphy/react-components";

const giphyFetch = new GiphyFetch("9Ic6NPyRWi27F8Rv103rCdtY9W61xYln");

function CarouselDemo() {
  const fetchGifs = () =>
    giphyFetch.search("iron man", { offset: 3, limit: 9 });
  return (
    <Grid width={1000} columns={3} fetchGifs={fetchGifs} gifHeight={200} gutter={50} />
  );
}

class IronMan extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className="center">IRON MAN GIPHY</h1>
        </header>
        <div className="center">
          <CarouselDemo />
        </div>
      </>
    );
  }
}

export default IronMan;
