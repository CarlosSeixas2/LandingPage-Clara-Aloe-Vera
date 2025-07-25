import Footer from "../components/footer";
import Header from "../components/header";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="bg-gradient-to-b from-[#f4f1ee] to-[#a3c9a8] min-h-screen flex flex-col items-center">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
