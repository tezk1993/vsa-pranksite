import { useEffect, useState } from "react";

import "./App.css";
import foghorn from "./assets/foghorn.wav";
import logo from "./assets/Logo.png";
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
    }, 500);
    return () => clearInterval(interval);
  }, [index]);

  const messages = [
    "Connecting to remote host...",
    "Authenticating user credentials...",
    "Access granted via SSH key...",
    "Enumerating system directories...",
    "Reading configuration files...",
    "Checking firewall status...",
    "Firewall rules retrieved...",
    "Scanning for open ports...",
    "Port 22 (SSH) open – initiating session...",
    "Downloading system logs...",
    "Uploading diagnostic report...",
    "Running vulnerability scan...",
    "Detected outdated software packages...",
    "Attempting privilege escalation...",
    "User added to sudoers group...",
    "Modifying crontab for scheduled task...",
    "Backing up configuration files...",
    "Restarting network service...",
    "Session terminated successfully.",
  ];

  return (
    <div className="w-full bg-black justify-center flex-col ">
      <div className="bg-black text-green-500 min-h-screen flex flex-col items-center justify-center font-mono">
        <img src={logo} className="size-32 m-8" />

        <h1 className="text-red-600 text-xl font-bold animate-pulse mb-6 md:text-4xl">
          ⚠️ SYSTEM BREACH DETECTED ⚠️
        </h1>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
          {index >= messages.length ? (
            <p className="text-red-500 mt-4 animate-pulse text-center text-4xl">
              💀 All data has been stolen 💀
            </p>
          ) : (
            <>
              {log.map((line, i) => (
                <p key={i} className="mb-1">
                  {line}
                </p>
              ))}
            </>
          )}
        </div>

        {index >= messages.length && (
          <button
            onClick={() => setPlayAudio(true)}
            className="mt-6 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white font-extrabold py-3 px-6 rounded-lg shadow-2xl animate-pulse ring-4 ring-red-500 ring-offset-2 ring-offset-black transition duration-300 ease-in-out hover:scale-105 hover:brightness-125 hover:animate-none"
          >
            ⚠️ Stop angrebet nu!
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
