import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        
      </Route>
    </Routes>

  );
}

export default App;
