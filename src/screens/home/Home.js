import React, { Component } from "react";


//mui extension
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

//custom extension
import Header from "../../common/header/Header";
import "./Home.css";
import TitleimageList from "../../common/movie_data/titleImageList";
import moviesData from "../../common/movie_data/moviesData";
import Filter, { filterObject } from "../filterCard/Filters";
import genres from "../../common/movieFilterCard/genre";
import artists from "../../common/movieFilterCard/artist";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: moviesData,
      genres: genres,
      artists: artists,
      filterObject: moviesData,
    };
  }
  filterMovies = () => {
    if (
      filterObject.movieName === "" &&
      filterObject.genres.length === 0 &&
      filterObject.artists.length === 0
    ) {
      const newState = this.state;
      newState.filterObject = moviesData;
      this.setState(newState);

      return moviesData;
    }

    const filteredMovies = this.state.moviesData.filter((movie) => {
      if (
        movie.title.toLowerCase() === filterObject.movieName.toLowerCase() ||
        movie.genres.some((genre) => filterObject.genres.includes(genre)) ||
        movie.artists.some((artist) =>
          filterObject.artists.includes(
            `${artist.first_name} ${artist.last_name}`
          )
        )
      ) {
        return movie;
      }
    });

    const newState = this.state;
    newState.filterObject = filteredMovies;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Header />
        <span className="heading">Upcoming Movies</span>
        <TitleimageList moviesData={this.state.moviesData} />

        <div className="flex-container">
          <div className="left">
            <ImageList cols={4} rowHeight={350}>
              {this.state.filterObject.map((item) => (
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

          <div className="right">
            <Filter
              genres={this.state.genres}
              artists={this.state.artists}
              filterMovies={this.filterMovies}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
