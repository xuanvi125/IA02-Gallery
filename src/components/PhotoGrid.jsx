import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Photo from "./Photo";

function PhotoGrid({ images }) {
  return (
    <Grid container spacing={2}>
      {images?.map((image) => (
        <Photo image={image} key={image.id} />
      ))}
    </Grid>
  );
}

export default PhotoGrid;
