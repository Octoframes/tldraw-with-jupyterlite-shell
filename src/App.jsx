import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Tldraw Component */}
      <div style={{ width: 500, height: 500, marginRight: '10px' }}>
        <Tldraw></Tldraw>
      </div>

      {/* Iframe Component */}
      <div style={{ flex: 1 }}>
        <iframe
          src="https://jupyterlite.github.io/xeus-python-demo/repl"
          style={{ width: '100%', height: '100%' }}
          title="Your Iframe Title"
        ></iframe>
      </div>
    </div>
  );
}
