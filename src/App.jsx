import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/GalleryDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/photos" />} />
        <Route index path="/photos" element={<Gallery />} />
        <Route path="/photos/:id" element={<GalleryDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
