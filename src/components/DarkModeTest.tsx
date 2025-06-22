'use client';

import { useTheme } from './ThemeProvider';

const DarkModeTest = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  const forceDarkMode = () => {
    setTheme('dark');
  };

  const forceLightMode = () => {
    setTheme('light');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-w-xs">
      <div className="text-sm space-y-2">
        <p className="text-gray-900 dark:text-white font-semibold">Dark Mode Debug</p>
        <p className="text-gray-600 dark:text-gray-400">Status: <span className={theme === 'dark' ? 'text-green-600' : 'text-red-600'}>{theme === 'dark' ? 'ON' : 'OFF'}</span></p>
        <p className="text-gray-600 dark:text-gray-400 text-xs">Theme: {theme}</p>
        <p className="text-gray-600 dark:text-gray-400 text-xs">localStorage: {localStorage.getItem('theme') || 'none'}</p>
        
        <div className="space-y-1">
          <button
            onClick={toggleTheme}
            className="w-full px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
          >
            Toggle Dark Mode
          </button>
          <button
            onClick={forceDarkMode}
            className="w-full px-3 py-1 bg-gray-800 text-white rounded text-xs hover:bg-gray-900"
          >
            Force Dark
          </button>
          <button
            onClick={forceLightMode}
            className="w-full px-3 py-1 bg-gray-200 text-gray-800 rounded text-xs hover:bg-gray-300"
          >
            Force Light
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkModeTest; 