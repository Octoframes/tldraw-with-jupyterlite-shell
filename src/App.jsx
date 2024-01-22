import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

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
        gap: "20px" // Reduces space between canvas and iframe
      }}
    >
      {/* Tldraw Component */}
      <div style={{
        width: "40%",
        height: "80%",
        border: "10px solid #ADD8E6", // Light blue border
        borderRadius: "10px", // Rounded corners
        overflow: "hidden", // Ensures nothing spills out of the border radius
      }}>
        <Tldraw />
      </div>

      {/* Iframe Component */}
      <div style={{
        width: "40%",
        height: "80%",
        border: "10px solid #ADD8E6", // Light blue border
        borderRadius: "10px", // Rounded corners
        overflow: "hidden", // Ensures nothing spills out of the border radius
      }}>
        <iframe
          src="https://jupyterlite.github.io/xeus-python-demo/repl"
          style={{ width: "100%", height: "100%", border: "none" }} // Removes the default border of iframe
          title="Your Iframe Title"
        />
      </div>
    </div>
  );
}




