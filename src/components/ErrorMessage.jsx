import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorMessage({ error }) {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Error: {error}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/photos")}
        style={{ marginTop: "20px" }}
      >
        Back to Home
      </Button>
    </Container>
  );
}

export default ErrorMessage;
