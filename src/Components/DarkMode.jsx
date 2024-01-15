import { useState } from "react";

export default function DarkMode() {
  const [colorMode, setColorMode] = useState("");

  return (
    <div className={`page ${colorMode}`}>
      <button
        className="dark-mode-button"
        onClick={() => setColorMode("dark-mode")}
      >
        Dark mode
      </button>
      <button className="light-mode-button" onClick={() => setColorMode("")}>
        Light mode
      </button>
    </div>
  );
}
