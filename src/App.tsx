import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">DevLink</h1>
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="p-2 border rounded bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      <InputForm />
    </div>
  );
}

export default App;
