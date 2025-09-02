import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { ContactManagement, CoursesManagement, Dashboard, EnquiryManagement, FacultyManagement, GalleryManagement, StudentFeedback, TopperResult } from "./pages";
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
        <Route
          path="/enquiry"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EnquiryManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ContactManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <CoursesManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <GalleryManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topper"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <TopperResult />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-feedback"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <StudentFeedback />
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