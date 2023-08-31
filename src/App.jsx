import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import ResumenContent from "./components/ResumenContent";

function App() {
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        height: "100%",
        border: "2px solid black",
      }}
    >
      <Profile />
      <Contacts />
      <ResumenContent />
    </div>
  );
}

export default App;
