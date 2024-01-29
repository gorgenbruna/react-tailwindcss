import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const pageRef = document.documentElement.classList;
  const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [dark, setDark] = useState(systemThemePreference);

  useEffect(() => {
    systemThemePreference && pageRef.add('dark');
  });

  const toggleTheme = () => {
    pageRef.toggle('dark');
    setDark(!dark);
  };

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 block dark:hidden cursor-pointer"
        onClick={toggleTheme}
      />
      <SunIcon
        className="h-8 text-gray-100 hidden dark:block cursor-pointer"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ToggleTheme;
