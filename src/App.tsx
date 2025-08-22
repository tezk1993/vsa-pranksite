import { useEffect, useState } from "react";

import "./App.css";
import foghorn from "./assets/foghorn.wav";
function App() {
  const [playAudio, setPlayAudio] = useState(false);

  var audio = new Audio(foghorn);
  audio.volume = 1;
  function play() {
    audio.play();
  }
  const [log, setLog] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (playAudio) {
        console.log("Denne funktion kører hvert sekund");
        play();
      }
    }, 10); // 1000 ms = 1 sekund

    // Ryd op når komponenten unmountes
    return () => clearInterval(interval);
  }, [playAudio]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < messages.length) {
        setLog((prev) => [...prev, messages[index]]);
        setIndex((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);

  const messages = [
    "Accessing system files...",
    "Injecting payload...",
    "Disabling firewall...",
    "Uploading data to remote server...",
    "System compromised!",
  ];

  return (
    <div className="w-full bg-black justify-center">
      <div className="bg-black text-green-500 min-h-screen flex flex-col items-center justify-center font-mono">
        <h1 className="text-red-600 text-4xl font-bold animate-pulse mb-6">
          ⚠️ SYSTEM BREACH DETECTED ⚠️
        </h1>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
          {log.map((line, i) => (
            <p key={i} className="mb-1">
              {line}
            </p>
          ))}
          {index >= messages.length && (
            <p className="text-red-500 mt-4 animate-pulse">
              💀 All data has been stolen 💀
            </p>
          )}
        </div>

        {index >= messages.length && (
          <button
            onClick={() => setPlayAudio(true)}
            className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded animate-pulse"
          >
            Dekrypter data
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
