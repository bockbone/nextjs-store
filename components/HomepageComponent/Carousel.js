import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

function MyCarousel(props) {
  const items = [
    {
      imagePath: "slide-one.jpg",
    },
    {
      imagePath: "slide-two.jpg",
    },
  ];
  return (
    <div className="max-w-screen-mediumlg mx-auto">
      <Carousel
        animation="slide"
        navButtonsAlwaysInvisible={true}
        autoPlay={false}
        fullHeightHover="false"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper>
      <img src={`/${props.item.imagePath}`} />
    </Paper>
  );
}

export default MyCarousel;
