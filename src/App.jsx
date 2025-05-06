import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Records from "./pages/Records";
import Members from "./pages/Members";
import News from "./pages/News";
import Links from "./pages/Links";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/records" element={<Records />} />
        <Route path="/members" element={<Members />} />
        <Route path="/news" element={<News />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  );
}
