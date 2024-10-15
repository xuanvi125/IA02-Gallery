import { Navigate, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/GalleryDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/photos" />} />
      <Route index path="/photos" element={<Gallery />} />
      <Route path="/photos/:id" element={<GalleryDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
