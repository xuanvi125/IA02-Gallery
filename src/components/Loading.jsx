import { CircularProgress, Container, Grid } from "@mui/material";

function Loading() {
  return (
    <Container style={{ height: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <CircularProgress />
      </Grid>
    </Container>
  );
}

export default Loading;
