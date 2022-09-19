import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  return (
    <>
      <div>
        <h1>Hello world!</h1>
        <Home />
      </div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
