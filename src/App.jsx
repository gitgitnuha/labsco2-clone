// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";
import ITSupportPage from "./pages/services/ITSupport"
import WebMaintenancePage from "./pages/services/webmaintenance";
import WebsiteAppDevPage from "./pages/services/WebsiteAppDev";
import ThirdPartyPage from "./pages/services/ThirdParty";
import ScrollToHash from './components/ScrollToHash';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
       <ScrollToHash />
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/it-support" element={<ITSupportPage />} />
        <Route path="/services/web-maintenance" element={<WebMaintenancePage />} />
        <Route path="/services/website-app-dev" element={<WebsiteAppDevPage />} />
        <Route path="/services/third-party" element={<ThirdPartyPage />} />
      </Routes>
      <Footer />
      
    </Router>
    

  );
}

export default App;
