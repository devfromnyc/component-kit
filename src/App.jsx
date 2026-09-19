import { Route, Routes } from "react-router-dom";
import CatalogHome from "./catalog/CatalogHome.jsx";
import PreviewPage from "./catalog/PreviewPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogHome />} />
      <Route path="/preview/:id" element={<PreviewPage />} />
    </Routes>
  );
}
