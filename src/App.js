import { Routes, Route, BrowserRouter } from "react-router-dom";
import GofamintJubileeCard from "./Pages/Gofamint Anticipate Card/GofamintJubileeCard";

function App() {
  return (
    <Routes>   
      <Route path="/gofamint-jubilee" element={<GofamintJubileeCard />}/>        
    </Routes>
  );
}

export default App;