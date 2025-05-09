import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Records from "./pages/Records";
import Password from "./pages/Password";
import Schedule_private from "./pages/Schedule_private";
import Members from "./pages/Members";
import News from "./pages/News";
import Links from "./pages/Links";

export default function App() {
  const location = useLocation();

  // Passwordページだけはヘッダー・ナビなし
  const hideLayout = location.pathname === "/records/password";

  return (
    <>
      {!hideLayout && (
        <>
          <Header />
          <Navbar />
        </>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/records" element={<Records />} />
        <Route path="/records/password" element={<Password />} />
        <Route path="/records/schedule_private" element={<Schedule_private />} />
        <Route path="/members" element={<Members />} />
        <Route path="/news" element={<News />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  );
}
