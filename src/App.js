import { BrowserRouter } from "react-router-dom";

// Component imports
import { TopNav } from "./components/common/TopNav";
import { HomePage } from "./components/screens/landing/HomePage";

// Stylesheet imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
