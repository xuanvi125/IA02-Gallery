import { useEffect, useState } from "react";
import * as UnsplashService from "../services/UnsplashService";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";
import PhotoGrid from "../components/PhotoGrid";

function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  async function fetchImages() {
    const data = await UnsplashService.getPhotos(page);
    setImages(data);
  }

  async function handleNext() {
    const data = await UnsplashService.getPhotos(page + 1);
    setImages((images) => [...images, ...data]);
    setPage((page) => page + 1);
  }

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={handleNext}
      hasMore={true}
      loader={<Loading />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div style={{ maxWidth: "1000px", margin: "auto", padding: "16px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gallery Photos
        </Typography>
        <PhotoGrid images={images} />
      </div>
    </InfiniteScroll>
  );
}

export default Gallery;
