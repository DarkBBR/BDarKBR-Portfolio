import "../styles/loading.css";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}
