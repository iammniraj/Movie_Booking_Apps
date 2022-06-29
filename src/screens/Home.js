import React, { Component } from "react";
import Header from "../common/header/Header";
import "./Home.css";
import TitleimageList from "../common/movie_data/titleImageList";
import moviesData from "../common/movie_data/moviesData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { moviesData: moviesData };
  }

  render() {
    return (
      <div>
        <Header />
        <span className="heading">Upcoming Movies</span>
        <TitleimageList moviesData={this.state.moviesData} />

        <div className="flex-container">
          <div className="left">
            <ImageList cols={4} rowHeight={350}>
              {this.state.moviesData.map((item) => (
                <ImageListItem key={item.id} className="imageList">
                  <img
                    src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={`Release Date : ${new Date(
                      item.release_date
                    ).toDateString()}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          <div className="right"></div>
        </div>
      </div>
    );
  }
}

export default Home;
