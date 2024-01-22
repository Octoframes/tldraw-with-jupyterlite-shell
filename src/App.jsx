import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import "./App.css";
import { useState } from "react";

function MakeReal() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = async () => {
    setShowMessage(true);
    console.log("This feature is not yet implemented on this page");
    setTimeout(() => {
      setShowMessage(false);
    }, 1000); // Hide the message after 1 second (1000 milliseconds)
  };

  return (
    <>
      {showMessage && (
        <div
          style={{
            position: "absolute",
            zIndex: 1001,
            right: 10,
            top: 50, // Adjust so it does not overlap the button
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          This feature is not yet <br></br> implemented on this page
        </div>
      )}
      <button
        style={{
          position: "absolute",
          zIndex: 1000,
          right: 10,
          top: 10,
          backgroundColor: "#007bff", // Bootstrap primary blue
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          outline: "none",
        }}
        onClick={handleClick}
      >
        Make Real
      </button>
    </>
  );
}

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Adjusts the children to be centered
        alignItems: "center", // Centers the children vertically
        position: "relative",
        width: "100vw",
        height: "100vh",
        padding: "20px", // Adds some padding inside the container
        gap: "20px", // Reduces space between canvas and iframe
      }}
    >
      {/* Tldraw Component */}
      <div
        style={{
          width: "40%",
          height: "80%",
          border: "10px solid #ADD8E6", // Light blue border
          borderRadius: "10px", // Rounded corners
          overflow: "hidden", // Ensures nothing spills out of the border radius
        }}
      >
        <Tldraw>
          <MakeReal />
        </Tldraw>
      </div>

      {/* Iframe Component */}
      <div
        style={{
          width: "40%",
          height: "80%",
          border: "10px solid #ADD8E6", // Light blue border
          borderRadius: "10px", // Rounded corners
          overflow: "hidden", // Ensures nothing spills out of the border radius
        }}
      >
        <iframe
          src="https://jupyterlite.github.io/xeus-python-demo/repl"
          style={{ width: "100%", height: "100%", border: "none" }} // Removes the default border of iframe
          title="Your Iframe Title"
        />
      </div>
    </div>
  );
}
