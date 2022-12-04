import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

// Component Import
import Dashboard from "./components/layout/Dashboard";

// Auth
import Login from "./components/screens/auth/Login";
import Register from "./components/screens/auth/Register";

// Stylesheet imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// TODO: Change alerts to toast notifications.

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
