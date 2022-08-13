import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext";

// Component imports
import { TopNav } from "./components/common/TopNav";
import { HomePage } from "./components/screens/landing/HomePage";
import PropertyHome from "./components/screens/property/PropertyHome";
import PropertyReview from "./components/screens/property/PropertyReview";
import ThankYou from "./components/common/ThankYou";
import ContactUs from "./components/screens/contact/ContactUs";
import Landing from "./components/screens/exclusive/Landing";

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
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-a-property" element={<PropertyHome />} />
          <Route path="/real-estate/review" element={<PropertyReview />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/exclusive-offers" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
