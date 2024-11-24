import React from "react";
import Auth from "./pages/auth";
import Admin from "./pages/Admin";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const ADMIN = "admin_01";

const AuthRoute = ({ children }) => {
  // Replace with actual authentication logic as needed
  const isAuthenticated = ADMIN === "admin_01";

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        />
        <Route
          path="/admin"
          element={
            // <PrivateRoute>
            <Admin />
            // </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
