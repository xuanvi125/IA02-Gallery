import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as UnsplashService from "../services/UnsplashService";
import {
  CircularProgress,
  Container,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
function GalleryDetails() {
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchPhoto() {
      const data = await UnsplashService.getPhoto(id);
      if (data.errors) {
        setErrors(data.errors);
        return;
      }
      setPhoto(data);
    }
    fetchPhoto();
  }, [id]);

  if (errors) {
    return <ErrorMessage error={errors[0]} />;
  }
  if (!photo) {
    return <Loading />;
  }

  return (
    <Container style={{ marginTop: "50px" }}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} sm={6}>
          <img
            src={photo.urls.full}
            alt={photo.alt_description}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            {photo.alt_description || "Untitled"}
          </Typography>
          <Typography variant="h6">
            Author: {photo.user.name || "Unknown"}
          </Typography>
          <Typography variant="body1">
            {photo.alt_description || "No description available"}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/photos")}
            style={{ marginTop: "20px" }}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GalleryDetails;
