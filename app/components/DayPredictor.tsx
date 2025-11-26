'use client';

import { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import ResultDisplay from './ResultDisplay';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const getNextDay = (day: string): string => {
  const index = DAYS.indexOf(day);
  return DAYS[(index + 1) % 7];
};

export default function DayPredictor() {
  const [selectedDay, setSelectedDay] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [nextDay, setNextDay] = useState('');

  const handlePredict = async () => {
    if (!selectedDay) return;

    setIsLoading(true);
    // Simulate API call with funny loading messages
    await new Promise((resolve) => setTimeout(resolve, 4000));

    const predicted = getNextDay(selectedDay);
    setNextDay(predicted);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {isLoading ? (
        <LoadingScreen />
      ) : nextDay ? (
        <ResultDisplay selectedDay={selectedDay} nextDay={nextDay} onReset={() => { setSelectedDay(''); setNextDay(''); }} />
      ) : (
        <div className="w-full max-w-sm sm:max-w-md">
          <div className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-1 sm:mb-2 text-center leading-tight">
                Next Day Predictor
              </h1>
              <p className="text-slate-300 text-center text-xs sm:text-sm tracking-wide">
                By Jovian
              </p>
            </div>

            <div className="mb-6 sm:mb-8 space-y-2">
              <label className="block text-slate-200 font-medium text-xs sm:text-sm uppercase tracking-wider">
                Select a day
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full bg-slate-700/30 text-slate-100 border border-slate-600/50 rounded-lg sm:rounded-xl p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-slate-700/50 transition-all duration-200 placeholder-slate-500 backdrop-blur-sm text-sm sm:text-base"
              >
                <option value="" className="bg-slate-800 text-slate-300">
                  -- Select a day --
                </option>
                {DAYS.map((day) => (
                  <option key={day} value={day} className="bg-slate-800 text-slate-100">
                    {day}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handlePredict}
              disabled={!selectedDay || isLoading}
              className="w-full bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-semibold py-3 sm:py-3.5 text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 disabled:from-slate-600 disabled:via-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95 disabled:shadow-none"
            >
              Predict Next Day
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
