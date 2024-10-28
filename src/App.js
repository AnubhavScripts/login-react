import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/authcontest';
import LoginPage from './components/loginpage';
import HomePage from './components/Homepage';
import { ProtectedRoute } from './components/protectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protected route */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          
          {/* Redirect root to /home, protection handled by ProtectedRoute */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Catch all other routes and redirect to /home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;