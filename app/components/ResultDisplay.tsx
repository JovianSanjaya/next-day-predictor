'use client';

interface ResultDisplayProps {
  selectedDay: string;
  nextDay: string;
  onReset: () => void;
}

export default function ResultDisplay({
  selectedDay,
  nextDay,
  onReset,
}: ResultDisplayProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-md px-3 sm:px-0">
      <div className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/30">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-2 sm:mb-4 text-center leading-tight">
            ✨ Result ✨
          </h1>
        </div>

        <div className="bg-slate-700/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-slate-600/30 space-y-4 sm:space-y-6">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-2 sm:mb-3">You selected</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 drop-shadow-lg">{selectedDay}</p>
          </div>

          <div className="flex justify-center">
            <div className="text-2xl sm:text-3xl text-slate-400">→</div>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-2 sm:mb-3">The next day is</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-indigo-300 drop-shadow-lg">{nextDay}</p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-semibold py-3 sm:py-3.5 text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95"
        >
          Predict Another Day
        </button>
      </div>
    </div>
  );
}
