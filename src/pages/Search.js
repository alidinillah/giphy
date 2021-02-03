import React from "react";
// import "./styles.css";
import ReactGiphySearchbox from "react-giphy-searchbox";
import "../App.css";
import { Component, Fragment } from "react";

class Search extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className="center">SEARCH YOUR GIPHY</h1>
        </header>
        <div className="center">
          <div className="searchboxWrapper">
            <ReactGiphySearchbox
              apiKey="9Ic6NPyRWi27F8Rv103rCdtY9W61xYln"
              onSelect={(item) => console.log(item)}
              gifListHeight={700}
              gifPerPage={9}
              searchPlaceholder="Search Giphy"
              masonryConfig={[
                { columns: 2, imageWidth: 110, gutter: 5 },
                { mq: "100px", columns: 3, imageWidth: 200, gutter: 50 },
              ]}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Search;
