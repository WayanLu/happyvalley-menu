import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import CreateNavbar from "../components/navbar/navbar";
import CreateMenu from "../pages/Menu";
//import Admin from "../pages/Admin";

function Layout() {
  return (
    <div>
      <CreateNavbar />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<CreateMenu />} />
          <Route path="/admin" element={<h1>test</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default Layout;
