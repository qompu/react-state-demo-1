import './App.css';
import { Routes, Route} from "react-router-dom";
import AboutPage from "./routes/AboutPage";
import CareersPage from "./routes/CareersPage";
import HomePage from "./routes/HomePage";
import Navbar from './Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </>
  );
}
export default App;