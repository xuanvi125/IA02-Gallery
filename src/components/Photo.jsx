import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Photo({ image }) {
  return (
    <Grid item xs={12} sm={6} md={4} key={image.id}>
      <Link to={`/photos/${image.id}`}>
        <Card
          style={{
            width: "100%",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height={300}
              image={image.urls.small}
              alt={image.alt_description}
              title={image.alt_description}
            />
            <CardContent style={{ minHeight: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                {image.user.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {image.alt_description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default Photo;
