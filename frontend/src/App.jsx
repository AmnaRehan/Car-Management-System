import {Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./comp/Navbar";

function App() {
  console.log("App rendered");

  return (
    <Box minH={"100vh"}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
    </Box>
  );
}

export default App;