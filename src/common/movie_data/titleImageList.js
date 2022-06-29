import React from "react";

import moviesData from "./moviesData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const TitleimageList = () => {
  return (
    <ImageList
      cols={6}
      rowHeight={250}
      style={{
        transform: "translateZ(0)",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        overflow: "hidden",
        overflowX: "scroll",
      }}
    >
      {moviesData.map((item) => (
        <ImageListItem
          key={item.id}
          style={{ cursor: "pointer", flexBasis: "20vw" }}
        >
          <img
            src={`${item.poster_url}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default TitleimageList;
