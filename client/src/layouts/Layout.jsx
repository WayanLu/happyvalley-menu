import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";

// pages
import CreateNavbar from "../components/navbar/navbar";
import CreateMenu from "../pages/Menu";
//import CreateAdmin from "../pages/Admin";

function Layout() {
  return (
    <div>
      <CreateNavbar />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<CreateMenu />} />
          {/* <Route path="/admin" element={<CreateAdmin />} /> */}
        </Routes>
      </Container>
    </div>
  );
}

export default Layout;
