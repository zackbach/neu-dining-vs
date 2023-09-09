import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter basename="neu-dining-vs">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
