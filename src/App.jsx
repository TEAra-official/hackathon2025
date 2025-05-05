import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import Links from "./pages/Links";


export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

       
      </Routes>
    </>
  );
}
