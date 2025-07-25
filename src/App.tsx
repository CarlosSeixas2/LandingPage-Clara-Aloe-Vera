import DefaultLayout from "./layout/defaultLayout";
import InicialPage from "./pages/inicialPage";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index path="/" element={<InicialPage />} />
      </Route>

      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
}
