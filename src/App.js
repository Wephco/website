import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import { TopNav } from "./components/common/TopNav";
import { HomePage } from "./components/screens/landing/HomePage";
import PropertyHome from "./components/screens/property/PropertyHome";

// Auth
import Login from "./components/screens/auth/Login";
import Register from "./components/screens/auth/Register";

// Stylesheet imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-a-property" element={<PropertyHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
