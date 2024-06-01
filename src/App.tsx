import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Votes from "./pages/Votes";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Votes />
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
