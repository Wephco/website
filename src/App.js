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
import Hotel from "./components/screens/hotel/Hotel";
import HotelReservation from "./components/screens/hotel/HotelReservation";
import OfficeReservation from "./components/screens/office/OfficeReservation";
import Office from "./components/screens/office/Office";
import MeetingRoom from "./components/screens/meetingRoom/MeetingRoom";
import MeetingRoomReservation from "./components/screens/meetingRoom/MeetingRoomReservation";
import PropertyManagement from "./components/screens/propertyManagement/PropertyManagement";
import EventsReservation from "./components/screens/events/EventsReservation";
import Events from "./components/screens/events/Events";
import ShortLet from "./components/screens/shortlet/ShortLet";
import ShortLetReservation from "./components/screens/shortlet/ShortLetReservation";
import DiasporaHome from "./components/screens/diaspora/DiasporaHome";

// Auth
import Login from "./components/screens/auth/Login";
import Register from "./components/screens/auth/Register";

// Stylesheet imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
          <Route path="/hotel-reservation" element={<Hotel />} />
          <Route
            path="/hotel-reservation-details"
            element={<HotelReservation />}
          />
          <Route path="/office-reservation" element={<Office />} />
          <Route
            path="/office-reservation-details"
            element={<OfficeReservation />}
          />
          <Route path="/meeting-room" element={<MeetingRoom />} />
          <Route
            path="/meeting-room-reservation-details"
            element={<MeetingRoomReservation />}
          />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/event-reservation" element={<Events />} />
          <Route
            path="/event-hall-reservation-details"
            element={<EventsReservation />}
          />
          <Route path="/shortlet" element={<ShortLet />} />
          <Route
            path="/shortlet-reservation-details"
            element={<ShortLetReservation />}
          />
          <Route path="/diaspora-plans" element={<DiasporaHome />} />
        </Routes>
      </BrowserRouter>
      <a
        href="https://wa.me/2349161246300"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </AppProvider>
  );
}

export default App;
