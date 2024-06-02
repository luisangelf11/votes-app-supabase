import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Data from "./pages/Data";
import Login from "./pages/Login";
import Votes from "./pages/Votes";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Votes />
          </ProtectedRoute>
        }/>
        <Route path="/resultados" element={
          <ProtectedRoute>
            <Data />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
