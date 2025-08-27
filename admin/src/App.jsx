import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { Dashboard } from "./pages";
import LoginPage from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;