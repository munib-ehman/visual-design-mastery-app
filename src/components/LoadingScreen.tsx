import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { Progress } from "./ui/progress";

const stages = [
  { time: 0, message: "Fetching game data..." },
  { time: 30, message: "Extracting useful information..." },
  { time: 60, message: "Analyzing similar titles..." },
  { time: 90, message: "Calculating product score..." },
  { time: 120, message: "Finalizing report..." },
];

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [elapsed, setElapsed] = useState(0);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(stages[0].message);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentStage = [...stages].reverse().find((s) => elapsed >= s.time);
    if (currentStage) {
      setMessage(currentStage.message);
    }

    // Fake progress bar up to 95%
    const maxProgress = 95;
    const fakeProgress = Math.min((elapsed / 200) * 100, maxProgress);
    setProgress(fakeProgress);
  }, [elapsed]);

  useEffect(() => {
    // Replace with real API completion trigger
    const fakeApiTimeout = setTimeout(() => {
      setProgress(100);
      setMessage("Completed!");
      setTimeout(onDone, 1000);
    }, 150000); // 150 sec = 2.5 min

    return () => clearTimeout(fakeApiTimeout);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#4b1d4b]/90 via-[#5f2c6f] to-[#261758] text-white">
      <div className="text-center space-y-6 max-w-sm w-full px-6 py-8 bg-black/30 backdrop-blur-md rounded-xl shadow-lg">
        <div className="flex items-center justify-center space-x-3">
          <Loader className="animate-spin text-purple-400" size={28} />
          <h2 className="text-xl font-semibold font-jakarta">
            Running Analysis
          </h2>
        </div>
        <Progress value={progress} className="h-2 bg-white/10" />
        <p className="text-sm text-white/80 font-jakarta">{message}</p>
        <p className="text-xs text-white/40 mt-2">
          Please wait — this may take up to 2–3 minutes.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
