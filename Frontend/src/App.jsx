import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing.jsx";

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
