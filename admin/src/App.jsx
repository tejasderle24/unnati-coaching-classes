import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { Dashboard, FacultyManagement } from "./pages";
import LoginPage from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/faculty"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <FacultyManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        {/* Unauthorized page */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;