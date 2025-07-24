import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/aboutPage";
import InicialPage from "./pages/inicialPage";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#f4f1ee] to-[#a3c9a8] min-h-screen flex flex-col items-center">
      <Header />

      <InicialPage />

      <AboutPage />

      <Footer />
    </div>
  );
}
