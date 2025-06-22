import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './features/auth/Login';
import ForgotPassword from './features/auth/ForgotPassword';
import UserList from './features/admin/UserList';
import NoAccess from './components/NoAccess';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute roles={["Admin"]}>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route path="/no-access" element={<NoAccess />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
