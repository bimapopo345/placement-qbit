import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://vite.dev"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img src={viteLogo} className="h-24" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img src={reactLogo} className="h-24" alt="React logo" />
          </a>
        </div>
        <h1 className="text-6xl font-bold text-center text-red-900 mb-8">
          Vite + React
        </h1>
        <div className="bg-white px-6 py-8 rounded-lg shadow-xl">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600 text-center">
            Edit{" "}
            <code className="bg-gray-100 rounded px-2 py-1">src/App.jsx</code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="mt-8 text-center text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
